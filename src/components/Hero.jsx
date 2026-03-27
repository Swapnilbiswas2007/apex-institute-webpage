import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const slideModules = import.meta.glob(
  "../../public/homepage-slideshow/*.{png,jpg,jpeg,webp,avif,svg}",
  {
    eager: true,
    import: "default",
    query: "?url",
  }
);

const slideImages = Object.entries(slideModules)
  .sort(([leftPath], [rightPath]) =>
    leftPath.localeCompare(rightPath, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  )
  .map(([, src]) => src);

const campusImages = [
  "/campus-collage/img1.jpeg",
  "/campus-collage/img2.jpeg",
  "/campus-collage/img3.jpeg",
];

const ANNOUNCEMENTS = [
  { label: "2026-27 Fees", link: "/announcement/scholarships" },
  { label: "Circulars", link: "/academic/circulars" },
  { label: "Syllabus", link: "/academic/overview" },
  { label: "Bus Routes", link: "/announcement/bus-routes" },
];

const CAMPUS_HIGHLIGHTS = [
  "Industry-aligned academic ecosystem",
  "Experienced faculty and student mentoring",
  "Modern labs, library, and digital learning access",
  "Strong campus support for hostel and transport",
  "Vibrant clubs, sports, and student communities",
  "Career readiness through training and placements",
];

const CAMPUS_STATS = [
  { value: "25+", label: "YEARS" },
  { value: "90% +", label: "PLACEMENT RATE" },
  { value: "320+", label: "INDUSTRY PARTNERS" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tickerMetrics, setTickerMetrics] = useState({
    offset: 0,
    travel: 0,
  });
  const activeSlide = slideImages[currentSlide];
  const tickerViewportRef = useRef(null);
  const tickerTrackRef = useRef(null);

  useEffect(() => {
    if (slideImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (slideImages.length <= 1) {
      return;
    }

    const nextIndex = (currentSlide + 1) % slideImages.length;
    const nextImage = new Image();
    nextImage.src = slideImages[nextIndex];
  }, [currentSlide]);

  useEffect(() => {
    const viewport = tickerViewportRef.current;
    const track = tickerTrackRef.current;

    if (!viewport || !track) {
      return undefined;
    }

    const updateTickerMetrics = () => {
      setTickerMetrics({
        offset: track.offsetWidth,
        travel: viewport.offsetWidth + track.offsetWidth,
      });
    };

    updateTickerMetrics();

    const resizeObserver = new ResizeObserver(() => {
      updateTickerMetrics();
    });

    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    window.addEventListener("resize", updateTickerMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTickerMetrics);
    };
  }, []);

  return (
    <main id="home">
      <section className="hero-section">
        <div className="hero-shell">
          <div className="announcement-ribbon" role="region" aria-label="Announcements">
            <div className="announcement-ribbon-viewport" ref={tickerViewportRef}>
              <div
                ref={tickerTrackRef}
                className="announcement-ribbon-track"
                style={{
                  "--ticker-start": `${tickerMetrics.travel - tickerMetrics.offset}px`,
                  "--ticker-distance": `-${tickerMetrics.travel}px`,
                }}
              >
                {ANNOUNCEMENTS.map((item, index) => (
                  <Link key={item.label} to={item.link} className="announcement-ribbon-link">
                    {item.label}
                    {index < ANNOUNCEMENTS.length - 1 ? (
                      <span className="announcement-ribbon-separator" aria-hidden="true">
                        |
                      </span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-stage">
            <div className="hero-slides" aria-hidden="true">
              <img
                key={activeSlide}
                className="hero-slide-image"
                src={activeSlide}
                alt=""
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="highlights" id="academic">
        <div className="cards-shell campus-info-section">
          <div className="campus-info-grid">
            <div className="campus-collage" aria-hidden="true">
              <div className="campus-collage-tall">
                <img src={campusImages[0] ?? activeSlide} alt="" />
              </div>
              <div className="campus-collage-stack">
                <div className="campus-collage-card">
                  <img src={campusImages[1] ?? activeSlide} alt="" />
                </div>
                <div className="campus-collage-card">
                  <img src={campusImages[2] ?? activeSlide} alt="" />
                </div>
              </div>
            </div>

            <div className="campus-info-copy">
              <div className="campus-ribbon" aria-label="25 years of excellence">
                <span>25 years of excellence</span>
              </div>
              <h2>Learn, grow, and build your future with a student-first campus.</h2>
              <p className="campus-info-text">
                Apex Institute of Technology combines strong academics, practical learning,
                modern infrastructure, and a supportive campus environment to help students
                thrive with confidence.
              </p>

              <div className="campus-feature-grid">
                {CAMPUS_HIGHLIGHTS.map((item) => (
                  <p key={item} className="campus-feature-item">
                    <span aria-hidden="true">✓</span>
                    {item}
                  </p>
                ))}
              </div>

              <div className="campus-stats-grid">
                {CAMPUS_STATS.map((stat) => (
                  <div key={stat.label} className="campus-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cards-shell cards-grid">
          <article className="info-card">
            <h2>Industry-ready programs</h2>
            <p>
              Practical coursework designed to align with modern technical
              careers.
            </p>
          </article>
          <article className="info-card">
            <h2>Experienced faculty</h2>
            <p>
              Learn from mentors with academic depth and real-world expertise.
            </p>
          </article>
          <article className="info-card" id="admission">
            <h2>Admissions open</h2>
            <p>
              Start your application and take the next step toward your goals.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
