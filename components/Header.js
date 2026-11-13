"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, profile } from "../lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="top">
      <Link href="/" className="top-name" onClick={() => setOpen(false)}>
        {profile.name}
        <small>{profile.kana}</small>
      </Link>
      <button
        className="top-menu"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "閉じる" : "目次"}
      </button>
      <nav id="site-nav" className={open ? "open" : ""} aria-label="主要">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
