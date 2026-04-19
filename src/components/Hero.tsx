import Image from "next/image";
import type { ResumeData } from "@/data/resume";

export default function Hero({ data }: { data: ResumeData }) {
  return (
    <section id="top" className="hero">
      <div className="shell">
        <div className="hero-grid">
          <div className="fade-in">
            <div className="eyebrow">
              <span className="eyebrow-dot pulse" />
              Available · Fractional &amp; advisory · {data.location}
            </div>
            <h1>
              Product leader, <em>founder</em>,<br />
              and fractional operator.
            </h1>
            <p className="hero-lede">{data.intro}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#contact">
                Start a conversation →
              </a>
              <a className="btn" href="#experience">
                See work history
              </a>
              <a
                className="btn"
                href={data.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          <aside
            className="hero-card fade-in"
            style={{ animationDelay: ".1s" }}
          >
            <div className="portrait">
              <Image
                src="/jon-portrait.png"
                alt={data.name}
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                priority
              />
            </div>
            <div className="hero-card-meta">
              <div className="meta-row">
                <span className="meta-label">Based</span>
                <span className="meta-value">{data.location}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Focus</span>
                <span className="meta-value">AI · Media · Ad-tech</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Open to</span>
                <span className="meta-value">
                  Fractional CPO · Advisory · Board
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Reply within</span>
                <span className="meta-value">48 hours</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
