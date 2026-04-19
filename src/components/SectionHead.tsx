import type { ReactNode } from "react";

type Props = {
  idx: string;
  label: string;
  title: ReactNode;
};

export default function SectionHead({ idx, label, title }: Props) {
  return (
    <div className="section-head">
      <div className="section-index">
        § {idx} — {label}
      </div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
