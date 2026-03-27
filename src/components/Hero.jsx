import { useEffect, useState } from "react";

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
