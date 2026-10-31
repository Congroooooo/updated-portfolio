"use client";

import { useRef } from "react";
import { ThemeToggle } from "./theme-toggle";

type NavigationItem = { href: string; label: string; number: string };

export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <div className="mobile-bar">
      <a className="mobile-bar__brand" href="#top">NB<span>.</span></a>
      <div className="mobile-bar__actions">
        <ThemeToggle compact />
      <details className="mobile-menu" ref={menu}>
        <summary aria-label="Open navigation menu"><span>MENU</span><span className="menu-lines" /></summary>
        <nav aria-label="Mobile navigation">
          {items.map((item) => (
            <a href={item.href} key={item.href} onClick={() => { if (menu.current) menu.current.open = false; }}>
              <span>{item.number}</span>{item.label}
            </a>
          ))}
        </nav>
      </details>
      </div>
    </div>
  );
}
