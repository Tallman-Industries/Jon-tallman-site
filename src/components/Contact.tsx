import type { ResumeData } from "@/data/resume";
import SaveAsPdfButton from "./SaveAsPdfButton";

export default function Contact({ data }: { data: ResumeData }) {
  return (
    <section id="contact" className="contact-wrap">
      <div className="shell">
        <div className="contact-grid">
          <div>
            <div className="contact-hed">
              Have something worth <em>building</em>? Let&apos;s talk.
            </div>
            <div className="contact-sub">
              Fractional product and strategy, advisory, or board — especially
              where AI, data, and media intersect. Typically replies within 48
              hours.
            </div>
          </div>
          <div className="contact-ctas">
            <a className="btn btn-primary" href={`mailto:${data.email}`}>
              Email →
            </a>
            <a
              className="btn"
              href={data.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <SaveAsPdfButton />
          </div>
        </div>
      </div>
    </section>
  );
}
