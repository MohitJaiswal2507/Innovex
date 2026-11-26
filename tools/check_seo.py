#!/usr/bin/env python3
"""Static SEO rule checker for the exported Next.js site (no external dependencies)."""

from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import re
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path


class PageParser(HTMLParser):
    """Extract SEO-relevant tags, headings, links, images, and JSON-LD from an HTML page."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.title = ""
        self._in_title = False
        self.description = ""
        self.robots = ""
        self.canonical = ""
        self.h1_count = 0
        self.images: list[dict[str, str]] = []
        self.links: list[str] = []
        self.jsonld: list[str] = []
        self._in_jsonld = False
        self._jsonld_buf: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = {k.lower(): (v or "") for k, v in attrs}
        t = tag.lower()
        if t == "title":
            self._in_title = True
        elif t == "meta":
            name = attr.get("name", "").lower()
            if name == "description":
                self.description = attr.get("content", "")
            elif name == "robots":
                self.robots = attr.get("content", "")
        elif t == "link" and "canonical" in attr.get("rel", "").lower().split():
            self.canonical = attr.get("href", "")
        elif t == "h1":
            self.h1_count += 1
        elif t == "img":
            self.images.append({"src": attr.get("src", ""), "alt": attr.get("alt", "")})
        elif t == "a" and "href" in attr:
            self.links.append(attr["href"])
        elif t == "script" and attr.get("type", "").lower() == "application/ld+json":
            self._in_jsonld = True
            self._jsonld_buf = []

    def handle_endtag(self, tag: str) -> None:
        t = tag.lower()
        if t == "title":
            self._in_title = False
        elif t == "script" and self._in_jsonld:
            self._in_jsonld = False
            self.jsonld.append("".join(self._jsonld_buf))

    def handle_data(self, data: str) -> None:
        if self._in_title:
            self.title += data
        elif self._in_jsonld:
            self._jsonld_buf.append(data)


def route_from_file(site_dir: Path, html_file: Path) -> str:
    rel = html_file.relative_to(site_dir).as_posix()
    if rel == "index.html":
        return "/"
    if rel.endswith("/index.html"):
        return "/" + rel[: -len("index.html")]
    return "/" + rel


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--site", default="out", help="Exported static site directory")
    ap.add_argument("--log", default="reports/seo_check_log.md", help="Markdown report path")
    args = ap.parse_args()

    site_dir = Path(args.site)
    if not site_dir.is_dir():
        print(f"ERROR: Site directory '{site_dir}' does not exist.", file=sys.stderr)
        return 1

    sitemap_path = site_dir / "sitemap.xml"
    sitemap_urls: set[str] = set()
    errors: list[str] = []
    warnings: list[str] = []

    if sitemap_path.is_file():
        tree = ET.parse(sitemap_path)
        for loc in tree.findall(".//{*}loc"):
            if loc.text:
                path = re.sub(r"^https?://[^/]+", "", loc.text.strip()) or "/"
                sitemap_urls.add(path)
    else:
        errors.append("Missing sitemap.xml in output directory")

    if not (site_dir / "robots.txt").is_file():
        errors.append("Missing robots.txt in output directory")

    html_files = sorted(
        f for f in site_dir.rglob("index.html")
        if route_from_file(site_dir, f) not in {"/404/", "/_not-found/"}
    )
    rows: list[tuple[str, str, int, int, int, str, int]] = []
    seen_titles: dict[str, str] = {}
    seen_descs: dict[str, str] = {}
    indexable_routes: set[str] = set()

    for html_file in html_files:
        route = route_from_file(site_dir, html_file)
        parser = PageParser()
        parser.feed(html_file.read_text(encoding="utf-8"))

        title = html.unescape(parser.title).strip()
        desc = html.unescape(parser.description).strip()
        is_noindex = "noindex" in parser.robots.lower()
        robots_label = "noindex" if is_noindex else "index"

        if is_noindex:
            warnings.append(f"`{route}` — noindex placeholder page — write content, then remove noindex and add to sitemap")
        else:
            indexable_routes.add(route)

        if not title:
            errors.append(f"`{route}` — missing <title>")
        elif not (30 <= len(title) <= 65):
            warnings.append(f"`{route}` — title length {len(title)} outside 30–65 chars")

        if title in seen_titles:
            errors.append(f"`{route}` — duplicate <title> with `{seen_titles[title]}`")
        seen_titles[title] = route

        if not desc:
            errors.append(f"`{route}` — missing meta description")
        elif not (70 <= len(desc) <= 165):
            warnings.append(f"`{route}` — description length {len(desc)} outside 70–165 chars")

        if desc in seen_descs:
            errors.append(f"`{route}` — duplicate meta description with `{seen_descs[desc]}`")
        seen_descs[desc] = route

        if parser.h1_count != 1:
            errors.append(f"`{route}` — expected 1 <h1>, found {parser.h1_count}")

        if not parser.canonical:
            errors.append(f"`{route}` — missing canonical link")

        for img in parser.images:
            if not img["alt"].strip():
                errors.append(f"`{route}` — image `{img['src']}` missing alt text")

        schema_types: list[str] = []
        for raw in parser.jsonld:
            try:
                data = json.loads(raw)
                if "@type" in data:
                    schema_types.append(str(data["@type"]))
            except json.JSONDecodeError as exc:
                errors.append(f"`{route}` — invalid JSON-LD: {exc}")

        for href in parser.links:
            if href.startswith("/") and not href.startswith("//"):
                clean = href.split("#", 1)[0].split("?", 1)[0]
                target = site_dir / clean.lstrip("/") / "index.html" if clean.endswith("/") else site_dir / clean.lstrip("/")
                if clean != "/" and not target.exists():
                    errors.append(f"`{route}` — broken internal link `{href}`")

        rows.append((route, robots_label, len(title), len(desc), parser.h1_count, ", ".join(schema_types) or "—", len(parser.links)))

    for route in sorted(indexable_routes - sitemap_urls):
        errors.append(f"`{route}` — indexable page missing from sitemap.xml")
    for route in sorted(sitemap_urls - indexable_routes):
        errors.append(f"`{route}` — in sitemap.xml but not indexable")

    now = dt.datetime.now().strftime("%Y-%m-%d %H:%M")
    lines = [
        "# SEO check log",
        "",
        f"Run: {now}  ",
        f"Site folder: `{args.site}`  ",
        f"Pages: {len(rows)} · Indexable: {len(indexable_routes)} · In sitemap: {len(sitemap_urls)} · **Errors: {len(errors)} · Warnings: {len(warnings)}**",
        "",
        "| URL | Robots | Title len | Desc len | H1 | Schema types | Links |",
        "|---|---|---|---|---|---|---|",
    ]
    for r in rows:
        lines.append(f"| {r[0]} | {r[1]} | {r[2]} | {r[3]} | {r[4]} | {r[5]} | {r[6]} |")

    if errors or warnings:
        lines.extend(["", "## Issues", ""])
        lines.extend(f"- **ERROR** {e}" for e in errors)
        lines.extend(f"- **WARN** {w}" for w in warnings)

    log_path = Path(args.log)
    log_path.parent.mkdir(parents=True, exist_ok=True)
    log_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"SEO check: {len(rows)} pages, {len(indexable_routes)} indexable, {len(sitemap_urls)} in sitemap, {len(errors)} errors, {len(warnings)} warnings")
    for e in errors:
        print(f"ERROR: {e}")
    for w in warnings:
        print(f"WARN: {w}")

    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
