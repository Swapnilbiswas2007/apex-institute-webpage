import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AlumniSection from "./AlumniSection";

const slideImages = [
  "/homepage-slideshow/sd1.jpeg",
  "/homepage-slideshow/sd2.jpeg",
  "/homepage-slideshow/sd3.jpeg",
  "/homepage-slideshow/sd4.jpeg",
];

const campusImages = [
  "/campus-collage/img1.jpeg",
  "/campus-collage/img2.jpeg",
  "/campus-collage/img3.jpeg",
];
const innovationShowcaseImage =
  "/innovation-showcase/Screenshot 2026-03-27 162756.png";
const virtualCampusImage = "/virtual-campus/campusmap.jpeg";
const placementGalleryImages = [
  "/placement-gallery/batch stats.jpeg",
  "/placement-gallery/placement stats.jpeg",
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

const UG_COURSES = [
  {
    title: "Artificial Intelligence and Machine Learning",
    image: "/course-placeholders/ug aiml.jpeg",
    brief:
      "Build intelligent systems using machine learning, deep learning, data science, and real-world AI applications.",
  },
  {
    title: "Computer Science and Engineering",
    image: "/course-placeholders/ug cse ug.jpeg",
    brief:
      "Develop strong foundations in software engineering, algorithms, databases, cloud computing, and modern application development.",
  },
  {
    title: "Architecture",
    image: "/course-placeholders/ug arch.jpeg",
    brief:
      "Design creative, functional, and sustainable built environments through studio practice, planning, and construction knowledge.",
  },
  {
    title: "Electronics and Communication Engineering",
    image: "/course-placeholders/ug ece.jpeg",
    brief:
      "Explore communication systems, embedded electronics, signal processing, VLSI, and connected digital technologies.",
  },
  {
    title: "Civil Engineering",
    image: "/course-placeholders/ug civil.jpeg",
    brief:
      "Learn structural design, transportation, environmental systems, surveying, and infrastructure development for the built world.",
  },
  {
    title: "Mechanical Engineering",
    image: "/course-placeholders/ug mech.jpeg",
    brief:
      "Study machines, manufacturing, thermodynamics, automation, and product design for industrial and real-world problem solving.",
  },
];

const PG_COURSES = [
  {
    title: "Master of Computer Applications",
    image: "/course-placeholders/pg mca.jpeg",
    brief:
      "Advance your skills in programming, software architecture, databases, cloud systems, and enterprise application development.",
  },
  {
    title: "M.Tech in Computer Science and Engineering",
    image: "/course-placeholders/pg cse.jpeg",
    brief:
      "Deepen expertise in advanced computing, intelligent systems, distributed platforms, and research-driven software innovation.",
  },
  {
    title: "M.Tech in Cybersecurity",
    image: "/course-placeholders/pg cybersecurity.jpeg",
    brief:
      "Focus on ethical hacking, network defense, cyber forensics, secure systems, and modern information security practices.",
  },
  {
    title: "M.Tech in VLSI Design",
    image: "/course-placeholders/pg vlsi.jpeg",
    brief:
      "Specialize in chip design, semiconductor systems, embedded hardware, verification, and next-generation electronic design workflows.",
  },
];

const TOUR_LOCATIONS = [
  {
    name: "Boys' Hostel",
    description: "Residential block with secure accommodation, study areas, and quick access to the sports zone.",
    top: "12%",
    left: "26%",
  },
  {
    name: "Girls' Hostel",
    description: "A supervised hostel wing designed for comfort, campus connectivity, and student support.",
    top: "12%",
    left: "43%",
  },
  {
    name: "Sports Hub",
    description: "Indoor activity zone for training, recreation, and student fitness programs throughout the year.",
    top: "22%",
    left: "60%",
  },
  {
    name: "Basketball Ground",
    description: "Outdoor courts beside the sports hub for team drills, practice sessions, and student tournaments.",
    top: "27%",
    left: "69%",
  },
  {
    name: "Football Ground",
    description: "Large turf field with track access for practice sessions, inter-college matches, and events.",
    top: "22%",
    left: "82%",
  },
  {
    name: "Cafeteria",
    description: "Central food court where students gather between classes for meals, refreshments, and informal meetings.",
    top: "37%",
    left: "63%",
  },
  {
    name: "Open Discussion Area",
    description: "Green collaborative zone for student conversations, club activity, and peer learning outdoors.",
    top: "46%",
    left: "46%",
  },
  {
    name: "Central Library",
    description: "The academic heart of campus with reading halls, reference collections, and digital resources.",
    top: "73%",
    left: "37%",
  },
  {
    name: "Admission Office, Placement Cell",
    description: "Support center for admissions guidance, candidate counseling, placement coordination, and recruiter outreach.",
    top: "78%",
    left: "11.5%",
  },
  {
    name: "Engineering Block",
    description: "Core academic building with classrooms, departmental labs, and project spaces for technical programs.",
    top: "74%",
    left: "57%",
  },
  {
    name: "Parking Lot",
    description: "Dedicated parking zone for visitors, staff, and campus operations with easy access to the main entry road.",
    top: "54%",
    left: "14%",
  },
  {
    name: "Big Empty Ground for Events",
    description: "Multi-use open ground for large gatherings, festivals, sports activity, and major campus events.",
    top: "58%",
    left: "77.5%",
  },
  {
    name: "Open Amphitheatre",
    description: "Open-air performance venue used for cultural showcases, orientations, and campus gatherings.",
    top: "60%",
    left: "93%",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [courseTab, setCourseTab] = useState("UG");
  const [tickerMetrics, setTickerMetrics] = useState({
    offset: 0,
    travel: 0,
  });
  const [campusInView, setCampusInView] = useState(false);
  const [innovationInView, setInnovationInView] = useState(false);
  const [tourInView, setTourInView] = useState(false);
  const [placementInView, setPlacementInView] = useState(false);
  const activeSlide = slideImages[currentSlide];
  const tickerViewportRef = useRef(null);
  const tickerTrackRef = useRef(null);
  const campusSectionRef = useRef(null);
  const innovationSectionRef = useRef(null);
  const tourSectionRef = useRef(null);
  const placementSectionRef = useRef(null);
  const courseCards = courseTab === "UG" ? UG_COURSES : PG_COURSES;

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

  useEffect(() => {
    const section = campusSectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setCampusInView(true);
        observer.disconnect();
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = innovationSectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setInnovationInView(true);
        observer.disconnect();
      },
      {
        threshold: 0.24,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = tourSectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setTourInView(true);
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = placementSectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setPlacementInView(true);
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
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
          <div
            ref={campusSectionRef}
            className={`campus-info-grid${campusInView ? " is-visible" : ""}`}
          >
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

        <div className="cards-shell innovation-showcase-section" id="admission">
          <div
            ref={innovationSectionRef}
            className={`innovation-showcase-grid${innovationInView ? " is-visible" : ""}`}
          >
            <div className="innovation-showcase-copy">
              <p className="innovation-showcase-kicker">Innovation Ecosystem</p>
              <h2>Impact your world through study</h2>
              <p>
                Encourage students and faculty to catalyze the development of
                innovation-driven enterprises through practical research,
                incubation support, and industry-connected learning.
              </p>
              <span className="innovation-showcase-rule" aria-hidden="true" />
            </div>

            <div className="innovation-showcase-media">
              <img
                src={innovationShowcaseImage}
                alt="Innovation ecosystem placeholder"
              />
            </div>
          </div>
        </div>

        <div
          ref={tourSectionRef}
          className={`cards-shell virtual-tour-section${tourInView ? " is-visible" : ""}`}
        >
          <div className="virtual-tour-header">
            <p className="virtual-tour-kicker">Campus Tour</p>
            <h2>Explore key spaces across the campus map.</h2>
          </div>

          <div className="virtual-tour-stage">
            <img
              className="virtual-tour-map"
              src={virtualCampusImage}
              alt="Campus tour placeholder map"
            />

            {TOUR_LOCATIONS.map((location) => (
              <button
                key={location.name}
                type="button"
                className="virtual-tour-hotspot"
                aria-label={location.name}
                style={{ top: location.top, left: location.left }}
              >
                <span className="virtual-tour-pin" aria-hidden="true">
                  <span className="virtual-tour-pin-hole" />
                </span>
                <span className="virtual-tour-tooltip">
                  <strong>{location.name}</strong>
                  <span>{location.description}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="cards-shell courses-section">
          <div className="courses-header">
            <p className="courses-kicker">Courses</p>
            <h2>Choose your academic path.</h2>
            <div className="courses-toggle" role="tablist" aria-label="Course level">
              <button
                type="button"
                className={`courses-tab${courseTab === "UG" ? " is-active" : ""}`}
                role="tab"
                aria-selected={courseTab === "UG"}
                onClick={() => setCourseTab("UG")}
              >
                UG
              </button>
              <button
                type="button"
                className={`courses-tab${courseTab === "PG" ? " is-active" : ""}`}
                role="tab"
                aria-selected={courseTab === "PG"}
                onClick={() => setCourseTab("PG")}
              >
                PG
              </button>
            </div>
          </div>

          <div className={`courses-grid courses-grid-${courseTab.toLowerCase()}`}>
            {courseCards.map((course, index) => (
              <article key={course.title} className="course-card">
                <div className="course-card-inner">
                  <div className="course-card-face course-card-front">
                    <div className="course-card-image">
                      <img src={course.image} alt="" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="course-card-face course-card-back">
                    <p>{course.title}</p>
                    <span>{course.brief}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          ref={placementSectionRef}
          className={`cards-shell placement-gallery-section${placementInView ? " is-visible" : ""}`}
        >
          <div className="placement-gallery-header">
            <p className="placement-gallery-kicker">Placements</p>
            <h2>Placement highlights and branch-wise performance.</h2>
          </div>

          <div className="placement-gallery-grid">
            <article className="placement-gallery-card placement-gallery-card-top">
              <img
                src={placementGalleryImages[0]}
                alt="Batch placement statistics"
              />
            </article>

            <article className="placement-gallery-card placement-gallery-card-bottom">
              <img
                src={placementGalleryImages[1]}
                alt="Branch-wise placement statistics"
              />
            </article>
          </div>
        </div>

        <AlumniSection />

        <div className="admissions-banner-section">
          <div className="admissions-banner">
            <div className="admissions-banner-frame" aria-hidden="true" />
            <div className="admissions-banner-pill">Admissions Open</div>

            <div className="admissions-banner-copy">
              <h2>
                Undergraduate &amp; Postgraduate
                <br />
                Programs at Apex Institute
              </h2>
              <p>Experience Apex, Experience Success</p>
            </div>

            <div className="admissions-banner-actions">
              <Link className="admissions-banner-button admissions-banner-button-primary" to="/contact-us">
                Apply Now
              </Link>
              <Link className="admissions-banner-button admissions-banner-button-secondary" to="/academic/overview">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
