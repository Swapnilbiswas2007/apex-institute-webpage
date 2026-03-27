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
  const activeSlide = slideImages[currentSlide];

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

  return (
    <main id="home">
      <section className="hero-section">
        <div className="hero-shell">
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
