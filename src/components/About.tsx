import type { ResumeData } from "@/data/resume";
import SectionHead from "./SectionHead";

export default function About({ data }: { data: ResumeData }) {
  return (
    <section id="about" className="block">
      <div className="shell">
        <SectionHead
          idx="01"
          label="About"
          title={
            <>
              About — a <em>product</em> person, a <em>founder</em>, a
              fractional operator.
            </>
          }
        />
        <div className="about-body">
          <div />
          <div className="about-prose">
            {data.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="stats-grid">
          {data.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
