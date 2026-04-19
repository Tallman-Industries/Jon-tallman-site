import type { ResumeData } from "@/data/resume";

export default function Footer({ data }: { data: ResumeData }) {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>
          © {new Date().getFullYear()} {data.name} — {data.location}
        </div>
        <div>{data.linkedin}</div>
      </div>
    </footer>
  );
}
