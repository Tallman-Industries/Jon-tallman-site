import type { ResumeData } from "@/data/resume";
import SectionHead from "./SectionHead";

export default function Skills({ data }: { data: ResumeData }) {
  const groups = Object.entries(data.skills);
  return (
    <section id="skills" className="block">
      <div className="shell">
        <SectionHead
          idx="04"
          label="Skills"
          title={
            <>
              Skills — where I&apos;m <em>useful</em>.
            </>
          }
        />
        <div className="skills-grid">
          {groups.map(([name, items]) => (
            <div className="skill-group" key={name}>
              <h4>{name}</h4>
              <ul>
                {items.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
