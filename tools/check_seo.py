#!/usr/bin/env python3
"""Lightweight SEO checks for the exported static site."""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


@dataclass
class PageInfo:
    url: str
    title: str = ""
    description: str = ""
    robots: str = "index"
    canonical: str = ""
    h1_count: int = 0
    links: list[str] = field(default_factory=list)
    schema_types: list[str] = field(default_factory=list)


class SeoHtmlParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.page = PageInfo(url="")
        self._in_title = False
        self._in_jsonld = False
        self._jsonld_chunks: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = {k.lower(): (v or "") for k, v in attrs}
        tag = tag.lower()

        if tag == "title":
            self._in_title = True
        elif tag == "meta":
            name = attr.get("name", "").lower()
            if name == "description":
                self.page.description = attr.get("content", "").strip()
            elif name == "robots":
                self.page.robots = attr.get("content", "index").strip().lower()
        elif tag == "link":
            rel = attr.get("rel", "").lower()
            if "canonical" in rel:
                self.page.canonical = attr.get("href", "").strip()
        elif tag == "h1":
            self.page.h1_count += 1
        elif tag == "a":
            href = attr.get("href", "").strip()
            if href:
                self.page.links.append(href)
        elif tag == "script" and attr.get("type", "").lower() == "application/ld+json":
            self._in_jsonld = True
            self._jsonld_chunks = []

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag == "title":
            self._in_title = False
        elif tag == "script" and self._in_jsonld:
            self._in_jsonld = False
            self.page.schema_types.extend(_extract_schema_types("".join(self._jsonld_chunks)))

    def handle_data(self, data: str) -> None:
        if self._in_title:
            self.page.title += data.strip()
        if self._in_jsonld:
            self._jsonld_chunks.append(data)


def _extract_schema_types(raw: str) -> list[str]:
    raw = raw.strip()
    if not raw:
        return []
    try:
        payload = json.loads(raw)
    except json.JSONDecodeError:
        return []

    items = payload if isinstance(payload, list) else [payload]
    found: list[str] = []
    for item in items:
        if isinstance(item, dict):
            value = item.get("@type")
            if isinstance(value, str):
                found.append(value)
            elif isinstance(value, list):
                found.extend(v for v in value if isinstance(v, str))
    return sorted(set(found))


def _url_for_html(site_root: Path, html_path: Path) -> str:
    rel = html_path.relative_to(site_root)
    if rel.parts[0].startswith("_"):
        return ""
    if rel.name != "index.html":
        return ""
    if rel.parent == Path("."):
        return "/"
    route = "/" + str(rel.parent).replace("\\", "/") + "/"
    if route == "/404/":
        return ""
    return route


def _normalize_path_url(url: str) -> str:
    parsed = urlparse(url)
    path = parsed.path or "/"
    if path != "/" and not path.endswith("/") and not path.endswith(".txt") and not path.endswith(".xml"):
        path += "/"
    return path


def _load_sitemap_urls(site_root: Path) -> set[str]:
    sitemap = site_root / "sitemap.xml"
    if not sitemap.exists():
        return set()
    xml = sitemap.read_text(encoding="utf-8")
    locs = re.findall(r"<loc>(.*?)</loc>", xml)
    return {_normalize_path_url(loc.strip()) for loc in locs}


def _parse_page(path: Path, site_root: Path) -> PageInfo | None:
    url = _url_for_html(site_root, path)
    if not url:
        return None
    parser = SeoHtmlParser()
    parser.feed(path.read_text(encoding="utf-8"))
    page = parser.page
    page.url = url
    return page


def _write_report(site: str, pages: list[PageInfo], in_sitemap: set[str], issues: list[str], errors: int) -> None:
    warnings = len([i for i in issues if i.startswith("WARN")])
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M")
    indexable = sum(1 for p in pages if "noindex" not in p.robots)
    sitemap_count = sum(1 for p in pages if p.url in in_sitemap)

    lines = [
        "# SEO check log",
        "",
        f"Run: {now}",
        f"Site folder: `{site}`",
        f"Pages: {len(pages)} · Indexable: {indexable} · In sitemap: {sitemap_count} · **Errors: {errors} · Warnings: {warnings}**",
        "",
        "| URL | Robots | Title len | Desc len | H1 | Schema types | Links |",
        "|---|---|---|---|---|---|---|",
    ]

    for p in sorted(pages, key=lambda x: x.url):
        lines.append(
            f"| {p.url} | {('noindex' if 'noindex' in p.robots else 'index')} | {len(p.title)} | {len(p.description)} | {p.h1_count} | {', '.join(p.schema_types) or '-'} | {len(p.links)} |"
        )

    lines += ["", "## Issues", ""]
    if issues:
        for issue in issues:
            lines.append(f"- **{issue.split(':', 1)[0]}** {issue.split(':', 1)[1]}")
    else:
        lines.append("- none")

    report = Path("reports/seo_check_log.md")
    report.parent.mkdir(parents=True, exist_ok=True)
    report.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--site", default="out")
    args = parser.parse_args()

    site_root = Path(args.site)
    if not site_root.exists():
        print(f"ERROR: site folder '{site_root}' does not exist", file=sys.stderr)
        return 2

    pages = [p for p in (_parse_page(path, site_root) for path in site_root.rglob("index.html")) if p is not None]
    if not pages:
        print("ERROR: no HTML pages found", file=sys.stderr)
        return 2

    sitemap_urls = _load_sitemap_urls(site_root)
    known_urls = {p.url for p in pages}
    issues: list[str] = []
    errors = 0

    for page in pages:
        is_noindex = "noindex" in page.robots
        if not page.title:
            issues.append(f"ERROR: `{page.url}` — missing <title>")
            errors += 1
        if not page.description:
            issues.append(f"ERROR: `{page.url}` — missing meta description")
            errors += 1
        if page.h1_count != 1:
            issues.append(f"ERROR: `{page.url}` — expected exactly one <h1>, found {page.h1_count}")
            errors += 1
        if not page.canonical:
            issues.append(f"ERROR: `{page.url}` — missing canonical link")
            errors += 1

        if is_noindex:
            issues.append(
                f"WARN: `{page.url}` — noindex placeholder page — write content, then remove noindex and add to sitemap"
            )
            if page.url in sitemap_urls:
                issues.append(f"ERROR: `{page.url}` — noindex page must not be in sitemap")
                errors += 1
        else:
            if page.url not in sitemap_urls:
                issues.append(f"ERROR: `{page.url}` — indexable page missing from sitemap")
                errors += 1

        for href in page.links:
            if not href.startswith("/"):
                continue
            target = _normalize_path_url(href)
            if target in {"/robots.txt", "/sitemap.xml"}:
                continue
            if target not in known_urls:
                issues.append(f"ERROR: `{page.url}` — broken internal link to `{href}`")
                errors += 1

    _write_report(args.site, pages, sitemap_urls, issues, errors)
    print(f"SEO check complete: {errors} error(s), {len([i for i in issues if i.startswith('WARN')])} warning(s)")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
