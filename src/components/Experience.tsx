import type { ResumeData } from "@/data/resume";
import SectionHead from "./SectionHead";
import ExperienceRow from "./ExperienceRow";

export default function Experience({ data }: { data: ResumeData }) {
  const c = data.current;
  return (
    <section id="experience" className="block">
      <div className="shell">
        <SectionHead
          idx="02"
          label="Work"
          title={
            <>
              Experience — two <em>decades</em> of product, data, and media.
            </>
          }
        />
        <div className="lead-card">
          <div>
            <div className="lead-label">
              <span className="eyebrow-dot pulse" /> Currently
            </div>
          </div>
          <div>
            <div className="lead-role">{c.title}</div>
            <div className="lead-org">
              {c.org}
              <span className="dot">·</span>
              {c.location}
            </div>
            <div className="lead-summary">{c.summary}</div>
            <div className="exp-tags">
              {c.tags.map((t, i) => (
                <span className="tag" key={i}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="lead-meta">{c.period}</div>
        </div>
        <div className="exp-list">
          {data.experience.map((item, i) => (
            <ExperienceRow key={i} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
