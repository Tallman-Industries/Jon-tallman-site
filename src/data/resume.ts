export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  duration: string;
  location: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type Project = {
  title: string;
  org: string;
  year: string;
  summary: string;
  impact: string;
  link?: string;
  linkLabel?: string;
  tags: string[];
};

export type Stat = { value: string; label: string };

export type Current = {
  title: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
};

export type ResumeData = {
  name: string;
  shortName: string;
  location: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  headlines: { primary: string; alt1: string; alt2: string };
  intro: string;
  about: string[];
  current: Current;
  experience: ExperienceItem[];
  projects: Project[];
  skills: Record<string, string[]>;
  stats: Stat[];
};

export const RESUME_DATA: ResumeData = {
  name: "Jonathan Tallman",
  shortName: "Jon Tallman",
  location: "Denver, Colorado",
  email: "jrtallman@gmail.com",
  linkedin: "linkedin.com/in/jonathan-tallman-25b50a92",
  linkedinUrl: "https://www.linkedin.com/in/jonathan-tallman-25b50a92/",

  headlines: {
    primary: "Product leader, founder, and fractional operator.",
    alt1: "Twenty years building products at the edge of data and media.",
    alt2: "Fractional product & strategy for early-stage and scaling teams.",
  },

  intro:
    "I help founders and product teams find the shape of what they're building — the story, the roadmap, the price tag, the pitch. Twenty years across identity, ad-tech, video, and market research; six of those founding and running an AI company.",

  about: [
    "I'm a product manager by trade and a founder by habit. Most recently I spent six and a half years as CEO and co-founder of Meaningly, a company I started in 2019 to apply proprietary vision and language models to video and media — eventually powering Reddit's Predicted Brand Lift product and annotation work for large media companies.",
    "Before that: product leadership at MarketChorus and FullContact, enterprise product and systems design at Datalogix / Oracle, R&D at Wazee Digital, product at WWE Digital Media, and market research product at TheInfoPro. I've built the thing, sold the thing, financed the thing, and occasionally cleaned up after the thing.",
    "Today I advise early-stage teams and take on fractional product, strategy, and narrative work — especially where AI, data, and media intersect.",
  ],

  current: {
    title: "Fractional Product & Strategy",
    org: "Independent",
    period: "2026 — Present",
    location: "Denver, CO",
    summary:
      "Advising founders and product teams on AI-era product strategy, narrative, pricing, and roadmap. Hands-on with early prototypes; strategic with scaling teams. Available for fractional CPO, board, and advisory engagements.",
    tags: ["Fractional CPO", "AI product strategy", "GTM & narrative", "Fundraising support"],
  },

  experience: [
    {
      title: "CEO & Co-founder",
      org: "Meaningly",
      period: "Oct 2019 — Mar 2026",
      duration: "6 yrs 6 mos",
      location: "Denver, CO",
      summary:
        "Founded an AI company built on proprietary vision and language models that extract meaningful signal from any media, paired with prediction models that make that signal valuable in context. Powered Reddit's Predicted Brand Lift and content annotation for large media companies.",
      bullets: [
        "Built and shipped proprietary vision + language models for media understanding",
        "Partnered with Reddit to power their Predicted Brand Lift ad product",
        "Ran the full stack of a startup — incorporation, HR, legal, taxes, payables, receivables",
        "Owned strategic planning, people management, product marketing, and product dev",
        "Led all fundraising, financial modeling, investor narrative, and decks",
      ],
      tags: ["Founder", "AI / ML", "Ad-tech", "Fundraising"],
    },
    {
      title: "Advisory Board",
      org: "Shotzr",
      period: "Aug 2019 — Jan 2021",
      duration: "1 yr 6 mos",
      location: "Denver, CO",
      summary:
        "Advised on product development and strategic direction for a targeted-imagery platform serving digital marketers. Shotzr was acquired by Shutterstock in 2021.",
      bullets: [
        "Strategic advice on nascent product development",
        "Hands-on work with the team applying those recommendations",
        "Company acquired by Shutterstock in 2021",
      ],
      tags: ["Advisory", "Acquisition"],
    },
    {
      title: "VP of Products",
      org: "MarketChorus",
      period: "Sep 2018 — Aug 2019",
      duration: "1 yr",
      location: "Denver, CO",
      summary:
        "Led product for an NLP/ML company classifying content into interests and topics for demand gen, targeting, and retargeting. Maintained the feedback loop between sales, software, and marketing.",
      bullets: [
        "Spent first four months gathering feedback and running experiments with engineering",
        "Constructed the roadmap, marketing plan, and GTM strategy end-to-end",
        "Led execution of that plan across product and GTM",
      ],
      tags: ["Product leadership", "NLP", "GTM"],
    },
    {
      title: "Sr. Director, Solutions Architecture",
      org: "FullContact",
      period: "Jul 2016 — Sep 2018",
      duration: "2 yrs 3 mos",
      location: "Denver, CO",
      summary:
        "Maximized revenue flow from new and existing identity-resolution offerings and built mechanisms for continued scale. Drove sales adoption while feeding directional guidance to engineering.",
      bullets: [
        "Shortened time-to-market by tightening the sales ↔ engineering loop",
        "Prototyped rapidly, failed or succeeded quickly, measured carefully — never stopped scaling",
        "Products and services I developed saw double-digit ARR growth QoQ",
      ],
      tags: ["Identity", "Solutions architecture", "Revenue"],
    },
    {
      title: "Director of Enterprise Products & Systems Design",
      org: "Oracle / Datalogix",
      period: "Aug 2013 — Jul 2016",
      duration: "3 yrs",
      location: "Denver, CO",
      summary:
        "Two years at Datalogix (pre-Oracle acquisition) owning products across deterministic matching, probabilistic identity, audience profiling, and publishing with ad-tech and social partners. Grew multiple products by tens of millions QoQ. Transitioned into Oracle as Director of Systems Design.",
      bullets: [
        "Grew multiple big-data products by tens of millions of dollars QoQ",
        "Hand-picked and managed statisticians, admins, and engineers for Systems Design and Operations Research",
        "Documented interactions across Sales, Ops, Product, Tech, Security, and Accounting — then rebuilt them digitally",
        "Designed, deployed, and trained delivery teams on nearly every GA product offering",
      ],
      tags: ["Big data", "Identity", "Systems design"],
    },
    {
      title: "Director of Research & Development",
      org: "Wazee Digital",
      period: "Sep 2010 — Aug 2013",
      duration: "3 yrs",
      location: "Denver, CO",
      summary:
        "Owned all software development and maintenance across an AWS platform processing 15+ TB of video content per day for clients including Sony Pictures, BBC Worldwide, the NCAA, Paramount, CNN, MGM, Fox, NBC Universal, and National Geographic. Reported to CTO. Team of 18.",
      bullets: [
        "Led team of 18 — developers plus QA, helpdesk, PM, and professional services (incl. offshore in India & Argentina)",
        "Platform spanned 20+ petabytes of content and a billion pieces of metadata across 20 unique websites",
        "Shipped tools for editing, search, massive transcoding, and third-party VOD publishing",
      ],
      tags: ["Video", "AWS", "R&D leadership"],
    },
    {
      title: "Senior Product Manager",
      org: "WWE",
      period: "Feb 2008 — Jan 2010",
      duration: "2 yrs",
      location: "Stamford, CT",
      summary:
        "Sole manager of new and existing products across the Digital Media group by end of tenure. A Top-300 online network with ~10MM monthly uniques (at the time); WWE.com alone saw 1MM+ daily visits. First real experience running Agile.",
      bullets: [
        "Shipped complete microsites in under a month with cross-functional teams",
        "Built content players and an automated transcoding + syndication system",
        "Negotiated and integrated with Hulu, AT&T, and Viacom",
      ],
      tags: ["Digital media", "Agile", "Partnerships"],
    },
    {
      title: "Product Manager",
      org: "TheInfoPro",
      period: "Mar 2005 — Feb 2008",
      duration: "3 yrs",
      location: "New York, NY",
      summary:
        "Product at a market research company providing intelligence on enterprise tech adoption — servers, storage, networking, security. Later acquired by a Gartner company.",
      bullets: [
        "Extracted a high-value subset of the research and packaged it as a new product",
        "Clients included Goldman Sachs, Credit Suisse, Lehman Brothers, Key Bank, and NYSE",
      ],
      tags: ["Market research", "Enterprise"],
    },
    {
      title: "Financial Advisor",
      org: "Morgan Stanley",
      period: "Jan 2002 — Sep 2002",
      duration: "9 mos",
      location: "New York, NY",
      summary:
        "Joined the Private Client group at 21 with Federal and NY State retail licenses, pre-undergrad. Cold calling, closing accounts, expanding books, processing orders. The start of the path that eventually became product management.",
      bullets: [],
      tags: ["Sales", "Early career"],
    },
  ],

  projects: [
    {
      title: "Predicted Brand Lift for Reddit",
      org: "Meaningly × Reddit",
      year: "2021 — 2026",
      summary:
        "Invented and productized Predicted Brand Lift on Reddit — using proprietary vision and language models to forecast which creative and placements will move brand metrics before a campaign runs.",
      impact: "Became a default measurement and planning product for Reddit advertisers.",
      link: "https://www.business.reddit.com/success-stories/advertisers/ark-invest",
      linkLabel: "ARK Invest case study →",
      tags: ["AI", "Ad measurement", "Enterprise partnership"],
    },
    {
      title: "Media Annotation Platform",
      org: "Meaningly",
      year: "2019 — 2026",
      summary:
        "Built a platform for media companies to annotate, enrich, and search their video libraries using our proprietary models — extracting interesting signal from every kind of media and making it usable downstream.",
      impact: "Shipped to media companies requiring deep annotation of large content libraries.",
      tags: ["Video", "AI", "Enterprise"],
    },
    {
      title: "Identity Resolution at Scale",
      org: "FullContact",
      year: "2016 — 2018",
      summary:
        "Led the go-to-market motion for a pioneering identity-resolution product line. Tightened the sales-engineering loop to ship and iterate faster, and drove adoption directly with enterprise buyers.",
      impact: "Double-digit ARR growth quarter over quarter across the product line.",
      tags: ["Identity", "Enterprise", "Revenue"],
    },
    {
      title: "Enterprise Systems Redesign",
      org: "Oracle / Datalogix",
      year: "2014 — 2016",
      summary:
        "Mapped every interaction between Sales, Ops, Product, Tech, Security, and Accounting — then rebuilt them digitally for real-time response and historical analysis, with training across every delivery team.",
      impact: "Systems used across nearly every GA Datalogix product at the time.",
      tags: ["Systems design", "Ops research"],
    },
  ],

  skills: {
    "Product & strategy": [
      "Product management",
      "Roadmapping",
      "GTM strategy",
      "Pricing & packaging",
      "Investor narrative",
      "Fundraising & financial modeling",
    ],
    "Leadership": [
      "People management",
      "Cross-functional leadership",
      "Hiring & org design",
      "Board & advisory",
      "Operations (HR / legal / finance)",
    ],
    "Domains": [
      "AI / ML products",
      "Vision & language models",
      "Identity resolution",
      "Ad-tech & measurement",
      "Video & media platforms",
      "Enterprise SaaS",
    ],
    "Ways of working": [
      "Agile",
      "Rapid prototyping",
      "Systems design",
      "Operations research",
      "Customer & partner coordination",
    ],
  },

  stats: [
    { value: "20+", label: "Years in product" },
    { value: "6.5", label: "Years founding Meaningly" },
    { value: "18", label: "Largest team led (Wazee R&D)" },
    { value: "20PB", label: "Content under platform at Wazee" },
  ],
};
