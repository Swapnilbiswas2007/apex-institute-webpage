import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FALLBACK_HERO_IMAGE = "/campus-collage/img1.jpeg";
const FALLBACK_GALLERY_IMAGES = [
  "/campus-collage/img1.jpeg",
  "/campus-collage/img2.jpeg",
];

const SECTION_THEMES = {
  About: {
    eyebrow: "Institutional Profile",
    heroImage: "/campus-collage/img1.jpeg",
    summary:
      "Explore the people, values, and institutional leadership that shape the academic culture and long-term vision of Apex Institute.",
    metrics: [
      { label: "Years of legacy", value: "25+" },
      { label: "Leadership teams", value: "6" },
      { label: "Strategic initiatives", value: "18" },
    ],
    atmosphere: ["Leadership", "Vision", "Governance"],
    gallery: ["/campus-collage/img2.jpeg", "/campus-collage/img3.jpeg"],
  },
  Academic: {
    eyebrow: "Academic Excellence",
    heroImage: "/course-placeholders/ug cse ug.jpeg",
    summary:
      "Discover the academic structure, departments, services, and learning resources that support a rigorous and future-ready campus experience.",
    metrics: [
      { label: "Departments", value: "12+" },
      { label: "Academic mentors", value: "180+" },
      { label: "Learning resources", value: "24/7" },
    ],
    atmosphere: ["Curriculum", "Faculty", "Resources"],
    gallery: ["/course-placeholders/ug cse ug.jpeg", "/course-placeholders/ug ece.jpeg"],
  },
  Announcement: {
    eyebrow: "Student Updates",
    heroImage: "/campus-collage/img3.jpeg",
    summary:
      "Stay informed with current notices, support schemes, event updates, and essential student-facing announcements from across campus.",
    metrics: [
      { label: "Active notice streams", value: "8" },
      { label: "Student schemes", value: "9" },
      { label: "Weekly updates", value: "24/7" },
    ],
    atmosphere: ["Notices", "Updates", "Support"],
    gallery: ["/campus-collage/img3.jpeg", "/campus-collage/img1.jpeg"],
  },
  Placement: {
    eyebrow: "Career Outcomes",
    heroImage: "/placement-gallery/placement stats.jpeg",
    summary:
      "Review the training ecosystem, recruiter network, placement achievements, and student career pathways built across the institute.",
    metrics: [
      { label: "Hiring partners", value: "200+" },
      { label: "Training hours", value: "5000+" },
      { label: "Placement support", value: "360deg" },
    ],
    atmosphere: ["Preparation", "Recruiters", "Success"],
    gallery: ["/placement-gallery/batch stats.jpeg", "/virtual-campus/campusmap.jpeg"],
  },
  "Campus Life": {
    eyebrow: "Student Experience",
    heroImage: "/campus-collage/img2.jpeg",
    summary:
      "See how academics, student communities, campus spaces, wellness, and everyday facilities come together to shape life at Apex.",
    metrics: [
      { label: "Clubs and chapters", value: "35+" },
      { label: "Major events", value: "140+" },
      { label: "Residential support", value: "Full-time" },
    ],
    atmosphere: ["Community", "Facilities", "Belonging"],
    gallery: ["/virtual-campus/campusmap.jpeg", "/campus-collage/img1.jpeg"],
  },
  Admission: {
    eyebrow: "Admissions Journey",
    heroImage: "/course-placeholders/pg mca.jpeg",
    summary:
      "Understand the pathways, eligibility expectations, and support systems available for applicants exploring Apex programs.",
    metrics: [
      { label: "Programs offered", value: "24+" },
      { label: "Admission windows", value: "3" },
      { label: "Counselling support", value: "1:1" },
    ],
    atmosphere: ["Programs", "Eligibility", "Guidance"],
    gallery: ["/course-placeholders/ug arch.jpeg", "/course-placeholders/pg mca.jpeg"],
  },
};

const PAGE_DETAILS = {
  "Vision & Mission": {
    overview:
      "Apex is committed to student-first growth, practical learning, and value-based education that prepares learners for real impact.",
    modules: ["Institutional vision", "Mission priorities", "Core values"],
    outcomes: ["Long-term direction", "Culture alignment", "Decision principles"],
  },
  Administration: {
    overview:
      "The administrative ecosystem at Apex supports academic continuity, student services, campus operations, and future planning.",
    modules: ["Governance structure", "Operational leadership", "Policy support"],
    outcomes: ["Clear coordination", "Reliable systems", "Student support"],
  },
  "Our Founders": {
    overview:
      "This page can highlight the founding story, early milestones, and the vision that shaped the institute's identity.",
    modules: ["Founding journey", "Institutional milestones", "Legacy highlights"],
    outcomes: ["Historical context", "Value foundation", "Community trust"],
  },
  Principal: {
    overview:
      "The Principal's office guides academic excellence, institutional development, and the overall student learning environment.",
    modules: ["Principal's message", "Academic priorities", "Leadership focus"],
    outcomes: ["Academic direction", "Quality assurance", "Student confidence"],
  },
  "Chairperson & Deans": {
    overview:
      "This section can present strategic leadership voices that shape quality benchmarks, growth, and interdisciplinary planning.",
    modules: ["Strategic priorities", "School leadership", "Development outlook"],
    outcomes: ["Institutional growth", "Academic balance", "Future readiness"],
  },
  "Head of Departments": {
    overview:
      "Department heads anchor curriculum delivery, faculty coordination, student mentoring, and laboratory planning across programs.",
    modules: ["Department leads", "Faculty vision", "Program stewardship"],
    outcomes: ["Stronger departments", "Focused mentoring", "Academic depth"],
  },
  "Academic Overview": {
    overview:
      "Academic planning at Apex combines foundational learning, labs, projects, assessments, and industry-linked exposure.",
    modules: ["Learning model", "Program structure", "Academic calendar"],
    outcomes: ["Structured progression", "Applied learning", "Career readiness"],
  },
  Departments: {
    overview:
      "Browse the departments, their specialization areas, learning environments, and academic pathways available to students.",
    modules: ["Department listing", "Specialization areas", "Faculty and labs"],
    outcomes: ["Program clarity", "Discipline exploration", "Better choices"],
  },
  "Library & Information Resource": {
    overview:
      "Apex provides access to books, references, digital resources, and reading spaces that support research and everyday study.",
    modules: ["Library services", "Digital access", "Reading spaces"],
    outcomes: ["Research support", "Anytime access", "Academic depth"],
  },
  "Comptroller of Examinations": {
    overview:
      "This page can centralize exam schedules, records, policies, and process support for students and departments.",
    modules: ["Exam calendar", "Records support", "Process notices"],
    outcomes: ["Clear timelines", "Reliable records", "Student guidance"],
  },
  "Time Table": {
    overview:
      "Students can use this section to access class schedules, academic planning updates, and timetable-specific notices.",
    modules: ["Class schedules", "Faculty timetables", "Revision notices"],
    outcomes: ["Time clarity", "Planning ease", "Academic discipline"],
  },
  Circulars: {
    overview:
      "Circulars can bring all important academic notices into one easy-to-follow stream for students, faculty, and parents.",
    modules: ["Official notices", "Department circulars", "Exam updates"],
    outcomes: ["Fast communication", "Reduced confusion", "Campus awareness"],
  },
  Scholarships: {
    overview:
      "Scholarship information can help students explore merit, need-based, and special-support opportunities with confidence.",
    modules: ["Eligibility overview", "Application guidance", "Support schemes"],
    outcomes: ["Financial support", "Access to education", "Clear next steps"],
  },
  "Hostel Admissions": {
    overview:
      "This page can outline accommodation eligibility, room allotment timelines, hostel guidelines, and support contacts.",
    modules: ["Eligibility and process", "Documents required", "Hostel policies"],
    outcomes: ["Smooth onboarding", "Residential clarity", "Student comfort"],
  },
  "Event Lists": {
    overview:
      "From seminars to technical festivals, this space can showcase upcoming campus events and participation opportunities.",
    modules: ["Upcoming events", "Workshops", "Registration links"],
    outcomes: ["Campus engagement", "Student participation", "Community energy"],
  },
  "Bus Routes": {
    overview:
      "Bus route details can help students plan daily travel with stop information, timings, and route-specific updates.",
    modules: ["Route maps", "Timing schedule", "Transport notices"],
    outcomes: ["Travel convenience", "Daily reliability", "Safer commute"],
  },
  "Training Cell": {
    overview:
      "The training cell strengthens communication, aptitude, interview readiness, and professional confidence before placement season.",
    modules: ["Skill-building plans", "Mock assessments", "Career mentoring"],
    outcomes: ["Interview readiness", "Improved confidence", "Placement support"],
  },
  Recruiters: {
    overview:
      "Recruiter information can highlight partner companies, sectors, internship pathways, and hiring engagement with Apex.",
    modules: ["Recruiter network", "Industry sectors", "Campus drives"],
    outcomes: ["Industry visibility", "Hiring access", "Career opportunities"],
  },
  "Placement Statistics": {
    overview:
      "Placement data can summarize branch-wise outcomes, offers, hiring trends, and major recruiter milestones year after year.",
    modules: ["Annual outcomes", "Branch performance", "Trend snapshots"],
    outcomes: ["Transparent data", "Student trust", "Better planning"],
  },
  "Placement Achievements": {
    overview:
      "Celebrate top offers, success stories, internship wins, and standout placement milestones achieved by Apex students.",
    modules: ["Top offers", "Success stories", "Milestone highlights"],
    outcomes: ["Student inspiration", "Institutional pride", "Career momentum"],
  },
  "Clubs & Associations": {
    overview:
      "Clubs and associations bring students together through creativity, leadership, service, technical exploration, and peer learning.",
    modules: ["Student clubs", "Chapters and forums", "Leadership opportunities"],
    outcomes: ["Belonging", "Peer networks", "Campus culture"],
  },
  "Tech Transfom": {
    overview:
      "Technology-driven spaces at Apex encourage experimentation, projects, innovation challenges, and hands-on problem solving.",
    modules: ["Innovation activities", "Student projects", "Applied learning"],
    outcomes: ["Project confidence", "Innovation exposure", "Practical skills"],
  },
  "Sports Facilities": {
    overview:
      "Sports facilities support training, fitness, recreation, and an active student lifestyle across indoor and outdoor spaces.",
    modules: ["Grounds and courts", "Fitness access", "Competitive events"],
    outcomes: ["Wellbeing", "Team spirit", "Active campus life"],
  },
  Library: {
    overview:
      "The campus library offers quiet reading, reference support, and digital access for coursework, exploration, and research.",
    modules: ["Reading areas", "Collections", "Digital resources"],
    outcomes: ["Focused study", "Knowledge access", "Research support"],
  },
  Cafeteria: {
    overview:
      "The cafeteria serves as a social campus hub with dining, conversation, and everyday student convenience built into one space.",
    modules: ["Dining spaces", "Meal support", "Student gathering areas"],
    outcomes: ["Daily comfort", "Community moments", "Campus convenience"],
  },
  Hostel: {
    overview:
      "Hostel facilities at Apex are designed to support safe, comfortable, and well-managed residential student life.",
    modules: ["Residential facilities", "Student support", "Hostel environment"],
    outcomes: ["Safe stay", "Better routines", "Residential ease"],
  },
  "B.Tech": {
    overview:
      "B.Tech admissions can introduce students to engineering pathways, specialization choices, and industry-relevant learning outcomes.",
    modules: ["Program overview", "Eligibility guidance", "Specialization options"],
    outcomes: ["Program fit", "Technical foundation", "Career direction"],
  },
  "B.Arch": {
    overview:
      "B.Arch admissions can help students understand design education, studio culture, and the creative discipline expected in the program.",
    modules: ["Architecture pathway", "Studio learning", "Admission guidance"],
    outcomes: ["Design clarity", "Creative readiness", "Career mapping"],
  },
  "M.Tech": {
    overview:
      "M.Tech admissions can position advanced technical learning, specialization depth, and research-focused progression for graduates.",
    modules: ["Specialization tracks", "Research orientation", "Admission pathway"],
    outcomes: ["Advanced expertise", "Technical depth", "Research preparation"],
  },
  MCA: {
    overview:
      "MCA can showcase software-focused postgraduate learning built around applications, systems thinking, and practical development skills.",
    modules: ["Program structure", "Skill outcomes", "Industry orientation"],
    outcomes: ["Software readiness", "Advanced learning", "Career mobility"],
  },
};

function toSentenceCase(value) {
  return value
    .replace(/[-/]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getPageData(page) {
  const sectionTheme = SECTION_THEMES[page.section] ?? SECTION_THEMES.About;
  const pageDetail = PAGE_DETAILS[page.label] ?? {
    overview: `${page.label} brings together key information, support details, and next-step guidance inside the ${page.section.toLowerCase()} area.`,
    modules: ["Overview", "Important updates", "Downloads and support"],
    outcomes: ["Clarity", "Confidence", "Actionable next steps"],
  };

  return {
    ...sectionTheme,
    ...pageDetail,
    journey: [
      `Understand how ${page.label.toLowerCase()} fits into the ${page.group.toLowerCase()} experience at Apex.`,
      `Review the key modules, resources, and notices that visitors typically need most.`,
      `Move confidently to the next step, whether that is exploring, applying, connecting, or downloading.`,
    ],
    chips: [
      `${toSentenceCase(page.label)} overview`,
      `${toSentenceCase(page.group)} updates`,
      "Downloads and resources",
      "Student support contacts",
      "Important dates",
      "Frequently asked questions",
    ],
  };
}

function handleImageFallback(event, fallbackSrc) {
  const image = event.currentTarget;

  if (image.dataset.fallbackApplied === "true") {
    return;
  }

  image.dataset.fallbackApplied = "true";
  image.src = fallbackSrc;
}

export default function MenuDetailPage({ page }) {
  const data = getPageData(page);
  const Icon = page.icon;

  return (
    <>
      <Navbar />
      <main className="sample-page">
        <section className="sample-hero">
          <div className="sample-shell">
            <div className="sample-hero-grid">
              <div className="sample-hero-copy">
                <p className="sample-eyebrow">{data.eyebrow}</p>
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
                <p className="sample-hero-summary">{data.summary}</p>
                <div className="sample-tags">
                  {data.atmosphere.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="sample-hero-media">
                <img
                  src={data.heroImage}
                  alt={page.label}
                  onError={(event) => handleImageFallback(event, FALLBACK_HERO_IMAGE)}
                />
                <div className="sample-hero-overlay">
                  <p>{page.group}</p>
                  <strong>{data.overview}</strong>
                </div>
              </div>
            </div>

            <div className="sample-panel sample-panel-featured">
              <div className="sample-panel-header">
                <div>
                  <p className="sample-card-label">Quick Snapshot</p>
                  <h2>{page.label} at a glance</h2>
                </div>
                <p>
                  This page already has a dedicated route at <strong>{page.link}</strong> and is
                  ready to hold final institute content, media, and downloads.
                </p>
              </div>

              <div className="sample-stats">
                {data.metrics.map((stat) => (
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
          <div className="sample-shell sample-grid sample-grid-main">
            <article className="sample-card sample-card-wide">
              <p className="sample-card-label">Page Overview</p>
              <h2>What visitors should understand here</h2>
              <div className="sample-list">
                <p>{data.overview}</p>
                <p>
                  This space can be developed into a polished final page with richer institute
                  content, downloadable files, featured updates, and section-specific CTAs.
                </p>
                <p>
                  It already matches the site’s visual system, so you can now replace the placeholder
                  copy with official content whenever you’re ready.
                </p>
              </div>
            </article>

            <article className="sample-card">
              <p className="sample-card-label">Core Modules</p>
              <h2>Suggested content blocks</h2>
              <div className="sample-list">
                {data.modules.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>

            <article className="sample-card">
              <p className="sample-card-label">Expected Outcomes</p>
              <h2>What this page should deliver</h2>
              <div className="sample-list">
                {data.outcomes.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
          </div>

          <div className="sample-shell sample-grid sample-grid-secondary">
            <article className="sample-card">
              <p className="sample-card-label">Visitor Journey</p>
              <h2>Recommended flow</h2>
              <div className="sample-list">
                {data.journey.map((item, index) => (
                  <p key={item}>
                    <strong>0{index + 1}.</strong> {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="sample-card">
              <p className="sample-card-label">Suggested Sections</p>
              <h2>Useful additions for launch</h2>
              <div className="sample-chip-grid">
                {data.chips.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>

          <div className="sample-shell sample-gallery-grid">
            {data.gallery.map((image, index) => (
              <article className="sample-gallery-card" key={`${page.label}-${index}`}>
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  onError={(event) =>
                    handleImageFallback(
                      event,
                      FALLBACK_GALLERY_IMAGES[index % FALLBACK_GALLERY_IMAGES.length]
                    )
                  }
                />
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
