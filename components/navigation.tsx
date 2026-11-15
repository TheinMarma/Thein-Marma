"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-8"
    >
      <Link
        href="/"
        aria-current={pathname === "/" ? "page" : undefined}
        className="font-mono text-sm text-foreground hover:text-zinc-500"
      >
        piyush garg
      </Link>
      <div className="flex items-center gap-3 font-mono text-sm text-zinc-500 sm:gap-4">
        {["courses", "gadgets", "guestbook"].map((page) => (
          <Link
            key={page}
            href={`/${page}/`}
            aria-current={pathname === `/${page}` ? "page" : undefined}
            className="hover:text-foreground"
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  );
}
