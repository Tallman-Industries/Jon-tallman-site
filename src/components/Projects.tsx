import type { ResumeData } from "@/data/resume";
import SectionHead from "./SectionHead";

export default function Projects({ data }: { data: ResumeData }) {
  return (
    <section id="projects" className="block">
      <div className="shell">
        <SectionHead
          idx="03"
          label="Projects"
          title={
            <>
              Selected <em>projects</em> — what I&apos;ve built that still
              matters.
            </>
          }
        />
        <div className="projects-grid">
          {data.projects.map((p, i) => (
            <article className="project-card" key={i}>
              <div className="project-top">
                <div>
                  <div className="project-title">{p.title}</div>
                </div>
                <div className="project-year">{p.year}</div>
              </div>
              <div className="project-org">{p.org}</div>
              <div className="project-summary">{p.summary}</div>
              <div className="project-impact">{p.impact}</div>
              <div className="exp-tags">
                {p.tags.map((t, j) => (
                  <span className="tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.linkLabel}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
