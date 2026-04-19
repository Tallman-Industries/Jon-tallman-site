"use client";

import { useState, type KeyboardEvent } from "react";
import type { ExperienceItem } from "@/data/resume";

export default function ExperienceRow({
  item,
  defaultOpen,
}: {
  item: ExperienceItem;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);

  const toggle = () => setOpen((o) => !o);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className="exp-row"
      onClick={toggle}
      onKeyDown={onKey}
      role="button"
      tabIndex={0}
      aria-expanded={open}
    >
      <div className="exp-period">
        {item.period}
        <br />
        <span className="dim">{item.duration}</span>
      </div>
      <div className="exp-head">
        <div className="exp-role">{item.title}</div>
        <div className="exp-org">
          {item.org}
          <span className="dot">·</span>
          {item.location}
        </div>
      </div>
      <div className="exp-summary">
        {item.summary}
        <div className="exp-toggle">{open ? "— collapse" : "+ expand"}</div>
      </div>
      {open && (
        <div className="exp-detail" onClick={(e) => e.stopPropagation()}>
          <div className="exp-detail-label">Highlights</div>
          <div>
            {item.bullets.length > 0 ? (
              <ul className="exp-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : (
              <div className="exp-empty">Foundational early-career role.</div>
            )}
            <div className="exp-tags">
              {item.tags.map((t, i) => (
                <span className="tag" key={i}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
