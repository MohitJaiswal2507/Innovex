"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isCurrent = (href: string) => pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-indigo text-white">
      <div className="container-x flex min-h-17 flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-extrabold tracking-wide text-white no-underline hover:text-white">
          <Image src="/logo.svg" width={36} height={36} alt="INNOVEX logo" priority />
          INNOVEX 2027 <small className="hidden text-xs font-medium tracking-normal text-[#c9cce0] lg:inline">Tech Fest</small>
        </Link>
        <button
          type="button"
          className="rounded-xl border-2 border-[#c9cce0] px-3 py-1.5 font-semibold text-white lg:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav id="main-nav" aria-label="Main" className={`${open ? "block" : "hidden"} w-full pb-3.5 lg:block lg:w-auto lg:pb-0`}>
          <ul className="flex flex-col gap-1.5 lg:flex-row lg:items-center">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="block rounded-xl px-3 py-3 text-[.95rem] font-semibold text-[#e4e6f2] no-underline hover:bg-indigo-2 hover:text-white aria-[current=page]:bg-indigo-2 aria-[current=page]:text-white lg:py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/register/"
                aria-current={pathname === "/register/" ? "page" : undefined}
                className="block rounded-xl bg-orange px-3 py-3 text-[.95rem] font-semibold text-ink no-underline hover:bg-amber hover:text-ink lg:py-2"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
