import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="sample-page">
        <section className="sample-hero">
          <div className="sample-shell">
            <div className="sample-hero-copy">
              <p className="sample-eyebrow">Contact Apex</p>
              <div className="sample-title-row">
                <div>
                  <p className="sample-breadcrumb">Home / Contact Us</p>
                  <h1>Get in touch with the right team quickly.</h1>
                </div>
              </div>
              <p className="sample-description">
                This sample contact page can later be replaced with your final enquiry form,
                map embed, department-wise contacts, and admission helpdesk details.
              </p>
            </div>

            <div className="sample-panel">
              <h2>Quick Snapshot</h2>
              <p>
                This route is now available at <strong>/contact-us</strong> and also supports
                redirect aliases for easier navigation.
              </p>
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
          <div className="sample-shell sample-grid">
            <article className="sample-card">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
