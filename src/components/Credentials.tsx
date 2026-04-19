const ITEMS = [
  "Founder · Meaningly",
  "AI · Vision & language models",
  "Reddit · Predicted Brand Lift",
  "Ex-Oracle / Datalogix",
  "Ex-FullContact",
  "Ex-WWE Digital",
  "20+ yrs in product",
];

export default function Credentials() {
  return (
    <div className="credentials">
      <div className="shell">
        <div className="cred-inner">
          {ITEMS.map((t, i) => (
            <span key={i}>
              <strong>·</strong> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
