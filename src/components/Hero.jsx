import { useEffect, useState } from "react";

const slideModules = import.meta.glob(
  "../../public/homepage-slideshow/*.{png,jpg,jpeg,webp,avif,svg}",
  {
    eager: true,
    import: "default",
    query: "?url",
  }
);

const slideImages = Object.values(slideModules).sort();

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slideImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main id="home">
      <section className="hero-section">
        <div className="hero-shell">
          <div className="hero-stage">
            <div className="hero-slides" aria-hidden="true">
              {slideImages.map((src, index) => (
                <div
                  key={src}
                  className={`hero-slide ${
                    index === currentSlide ? "is-active" : ""
                  }`}
                >
                  <img src={src} alt="" />
                </div>
              ))}
            </div>

            <div className="hero-overlay" />

            <div className="hero-copy">
              <p className="eyebrow">Shape your future with confidence</p>
              <h1>Career-focused learning for tomorrow&apos;s innovators.</h1>
              <p className="hero-text">
                Apex Institute of Technology helps students build practical
                skills in engineering, computing, and applied sciences through
                hands-on learning.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#admission">
                  Apply Now
                </a>
                <a className="btn btn-secondary" href="#academic">
                  Explore Academics
                </a>
              </div>

              <div className="hero-dots" aria-label="Homepage slideshow status">
                {slideImages.map((src, index) => (
                  <button
                    key={`${src}-dot`}
                    type="button"
                    className={`hero-dot ${
                      index === currentSlide ? "is-active" : ""
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights" id="academic">
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
