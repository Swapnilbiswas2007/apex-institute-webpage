import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SECTION_THEMES = {
  About: {
    eyebrow: "Institutional Profile",
    highlights: ["Legacy", "Leadership", "Values"],
    stats: [
      { label: "Years of legacy", value: "40+" },
      { label: "Leadership councils", value: "6" },
      { label: "Community partners", value: "120+" },
    ],
  },
  Academic: {
    eyebrow: "Academic Excellence",
    highlights: ["Curriculum", "Faculty", "Resources"],
    stats: [
      { label: "Schools and departments", value: "12" },
      { label: "Academic mentors", value: "180+" },
      { label: "Research labs", value: "28" },
    ],
  },
  Announcement: {
    eyebrow: "Latest Student Updates",
    highlights: ["Deadlines", "Opportunities", "Campus Notices"],
    stats: [
      { label: "Active notices", value: "18" },
      { label: "Student schemes", value: "9" },
      { label: "Weekly updates", value: "24/7" },
    ],
  },
  Placement: {
    eyebrow: "Career Outcomes",
    highlights: ["Readiness", "Recruiters", "Success Stories"],
    stats: [
      { label: "Hiring partners", value: "200+" },
      { label: "Top offer growth", value: "32%" },
      { label: "Training hours", value: "5000+" },
    ],
  },
  "Campus Life": {
    eyebrow: "Student Experience",
    highlights: ["Communities", "Facilities", "Wellbeing"],
    stats: [
      { label: "Student clubs", value: "35+" },
      { label: "Campus events", value: "140+" },
      { label: "Residential blocks", value: "8" },
    ],
  },
  Admission: {
    eyebrow: "Admissions Journey",
    highlights: ["Programs", "Eligibility", "Support"],
    stats: [
      { label: "Programs offered", value: "24" },
      { label: "Scholarship slabs", value: "7" },
      { label: "Admission windows", value: "3" },
    ],
  },
};

function toSentenceCase(value) {
  return value
    .replace(/[-/]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildHighlights(page) {
  return [
    `${page.label} is designed as a dedicated ${page.group.toLowerCase()} touchpoint within the ${page.section.toLowerCase()} area.`,
    `Students and families can use this page to quickly understand the purpose, scope, and next steps for ${page.label.toLowerCase()}.`,
    `This sample layout can later be replaced with final institute content, downloads, forms, or notices without changing the route.`,
  ];
}

function buildTimeline(page) {
  return [
    `Explore the overview and objectives for ${page.label.toLowerCase()}.`,
    `Review the latest updates, contacts, and support resources curated by the ${page.group.toLowerCase()} team.`,
    `Take the next action, such as applying, downloading resources, or contacting the relevant office.`,
  ];
}

export default function MenuDetailPage({ page }) {
  const theme = SECTION_THEMES[page.section] ?? SECTION_THEMES.About;
  const Icon = page.icon;

  return (
    <>
      <Navbar />
      <main className="sample-page">
        <section className="sample-hero">
          <div className="sample-shell">
            <div className="sample-hero-copy">
              <p className="sample-eyebrow">{theme.eyebrow}</p>
              <div className="sample-title-row">
                <span className="sample-icon-wrap">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <p className="sample-breadcrumb">
                    {page.section} / {page.group}
                  </p>
                  <h1>{page.label}</h1>
                </div>
              </div>
              <p className="sample-description">{page.description}</p>
              <div className="sample-tags">
                {theme.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="sample-panel">
              <h2>Quick Snapshot</h2>
              <p>
                This sample page is ready for final content and already has a dedicated route at{" "}
                <strong>{page.link}</strong>.
              </p>
              <div className="sample-stats">
                {theme.stats.map((stat) => (
                  <div className="sample-stat-card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sample-content">
          <div className="sample-shell sample-grid">
            <article className="sample-card">
              <p className="sample-card-label">Page Overview</p>
              <h2>What this page can contain</h2>
              <div className="sample-list">
                {buildHighlights(page).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>

            <article className="sample-card">
              <p className="sample-card-label">Suggested Sections</p>
              <h2>Starter content blocks</h2>
              <div className="sample-chip-grid">
                {[
                  `${toSentenceCase(page.label)} overview`,
                  `${toSentenceCase(page.group)} announcements`,
                  "Downloads and resources",
                  "Contact information",
                  "Important dates",
                  "Frequently asked questions",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>

            <article className="sample-card">
              <p className="sample-card-label">Visitor Journey</p>
              <h2>Recommended flow</h2>
              <div className="sample-list">
                {buildTimeline(page).map((item, index) => (
                  <p key={item}>
                    <strong>0{index + 1}.</strong> {item}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
