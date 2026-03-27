import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FALLBACK_CONTACT_IMAGES = [
  "/campus-collage/img1.jpeg",
  "/campus-collage/img3.jpeg",
];

const CONTACT_CARDS = [
  {
    title: "Admissions Office",
    details: ["admissions@apex.edu", "+91 1800 123 456", "Mon - Sat, 9:00 AM to 5:00 PM"],
  },
  {
    title: "Campus Address",
    details: ["Apex Institute of Technology", "123 Knowledge Avenue", "Innovation City, India"],
  },
  {
    title: "Student Support",
    details: ["support@apex.edu", "Hostel, transport, and academic help", "Response within 1 business day"],
  },
];

const ENQUIRY_TOPICS = [
  "Admissions and eligibility",
  "Fee structure and scholarships",
  "Campus visit scheduling",
  "Placements and industry training",
  "Hostel and transport support",
  "Academic departments",
];

const CONTACT_IMAGES = [
  "/campus-collage/img1.jpeg",
  "/campus-collage/img3.jpeg",
];

function handleImageFallback(event, fallbackSrc) {
  const image = event.currentTarget;

  if (image.dataset.fallbackApplied === "true") {
    return;
  }

  image.dataset.fallbackApplied = "true";
  image.src = fallbackSrc;
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="sample-page">
        <section className="sample-hero">
          <div className="sample-shell">
            <div className="sample-hero-grid">
              <div className="sample-hero-copy">
                <p className="sample-eyebrow">Contact Apex</p>
                <div className="sample-title-row">
                  <div>
                    <p className="sample-breadcrumb">Home / Contact Us</p>
                    <h1>Get in touch with the right team quickly.</h1>
                  </div>
                </div>
                <p className="sample-description">
                  Reach the appropriate office for admissions, student services, transport,
                  residential support, or general campus enquiries without unnecessary back and forth.
                </p>
                <p className="sample-hero-summary">
                  This page is ready for your final form embed, department-wise contacts,
                  map support, and admissions helpdesk details while already matching the
                  visual language of the homepage.
                </p>
                <div className="sample-tags">
                  {["Admissions", "Student Support", "Campus Visits"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="sample-hero-media">
                <img
                  src={CONTACT_IMAGES[0]}
                  alt="Apex contact support"
                  onError={(event) => handleImageFallback(event, FALLBACK_CONTACT_IMAGES[0])}
                />
                <div className="sample-hero-overlay">
                  <p>Support and Guidance</p>
                  <strong>
                    Connect students, parents, and applicants to the right contact point faster.
                  </strong>
                </div>
              </div>
            </div>

            <div className="sample-panel sample-panel-featured">
              <div className="sample-panel-header">
                <div>
                  <p className="sample-card-label">Quick Snapshot</p>
                  <h2>Contact support at a glance</h2>
                </div>
                <p>
                  This route is available at <strong>/contact-us</strong> and already supports
                  redirect aliases for easier navigation from the rest of the site.
                </p>
              </div>

              <div className="sample-stats">
                <div className="sample-stat-card">
                  <strong>3</strong>
                  <span>Primary help channels</span>
                </div>
                <div className="sample-stat-card">
                  <strong>1 Day</strong>
                  <span>Typical response time</span>
                </div>
                <div className="sample-stat-card">
                  <strong>6</strong>
                  <span>Common enquiry topics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sample-content">
          <div className="sample-shell sample-grid sample-grid-main">
            <article className="sample-card sample-card-wide">
              <p className="sample-card-label">Contact Channels</p>
              <h2>Where visitors can reach you</h2>
              <div className="sample-list">
                {CONTACT_CARDS.map((card) => (
                  <p key={card.title}>
                    <strong>{card.title}:</strong> {card.details.join(" | ")}
                  </p>
                ))}
              </div>
            </article>

            <article className="sample-card">
              <p className="sample-card-label">Suggested Sections</p>
              <h2>What this page can include</h2>
              <div className="sample-chip-grid">
                {[
                  "Online enquiry form",
                  "Campus map and directions",
                  "Department contacts",
                  "Admission helpdesk",
                  "Office hours",
                  "Visit request form",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>

            <article className="sample-card">
              <p className="sample-card-label">Popular Enquiries</p>
              <h2>Common reasons students reach out</h2>
              <div className="sample-list">
                {ENQUIRY_TOPICS.map((topic, index) => (
                  <p key={topic}>
                    <strong>0{index + 1}.</strong> {topic}
                  </p>
                ))}
              </div>
            </article>
          </div>

          <div className="sample-shell sample-gallery-grid">
            {CONTACT_IMAGES.map((image, index) => (
              <article className="sample-gallery-card" key={`contact-${index}`}>
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  onError={(event) => handleImageFallback(event, FALLBACK_CONTACT_IMAGES[index])}
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
