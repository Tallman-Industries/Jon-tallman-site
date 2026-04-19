"use client";

import { useEffect, useState } from "react";
import type { ResumeData } from "@/data/resume";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function TopNav({ data }: { data: ResumeData }) {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = ["top", "about", "experience", "projects", "skills", "contact"];
    const onScroll = () => {
      let cur = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="top-nav">
      <div className="shell top-nav-inner">
        <a className="brand" href="#top">
          {data.shortName}
          <span className="brand-sub">/ product &amp; strategy</span>
        </a>
        <div className="nav-links">
          {NAV_ITEMS.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={active === i.id ? "active" : ""}
            >
              {i.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
