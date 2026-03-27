import { MapPinned, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  {
    title: "Academics",
    links: [
      { label: "Academic Overview", to: "/academic/overview" },
      { label: "Departments", to: "/academic/departments" },
      { label: "Library", to: "/campus-life/library" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Under Graduate", to: "/admission/b-tech" },
      { label: "Post Graduate", to: "/admission/m-tech" },
      { label: "Scholarships", to: "/announcement/scholarships" },
    ],
  },
  {
    title: "Get In Touch",
    links: [
      { label: "Principal", to: "/about/principal" },
      { label: "Maps & Directions", to: "/about/administration" },
      { label: "Placement Cell", to: "/placement/training-cell" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", mark: "IG" },
  { label: "TikTok", href: "#", mark: "TT" },
  { label: "LinkedIn", href: "#", mark: "in" },
  { label: "Facebook", href: "#", mark: "f" },
  { label: "YouTube", href: "#", mark: "YT" },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-columns">
        {FOOTER_COLUMNS.map((column) => (
          <section key={column.title} className="footer-column">
            <h2>{column.title}</h2>
            <div className="footer-links">
              {column.links.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="container footer-showcase">
        <div className="footer-copyright">
          <p>Copyright © 2026 Apex Institute of Technology</p>
        </div>

        <div className="footer-brand-center" aria-label="Apex Institute branding">
          <p>APEX</p>
          <span>Institute of Technology</span>
        </div>

        <div className="footer-socials">
          <a href="mailto:admissions@apex.edu" aria-label="Email admissions">
            <Phone size={28} strokeWidth={2.2} />
          </a>
          <a href="https://maps.google.com" aria-label="Campus location">
            <MapPinned size={28} strokeWidth={2.2} />
          </a>
          {SOCIAL_LINKS.map((item) => {
            return (
              <a key={item.label} href={item.href} aria-label={item.label}>
                <span className="footer-social-mark">{item.mark}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
