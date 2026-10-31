"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string; number: string };

export function SectionNavigation({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current: string | null = null;
        for (const item of items) {
          const target = document.querySelector(item.href);
          if (target && target.getBoundingClientRect().top <= window.innerHeight * 0.42) {
            current = item.href;
          }
        }
        setActive(current);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav className="sidebar__nav" aria-label="Main navigation">
      {items.map((item) => (
        <a className={active === item.href ? "is-active" : undefined} href={item.href} key={item.href} aria-current={active === item.href ? "location" : undefined}>
          <span>{item.number}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
