import React from "react";

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);
  const scrolledRef = React.useRef(false);

  const onScroll = React.useCallback(() => {
    const y = window.scrollY;
    const enterThreshold = threshold;
    const exitThreshold = Math.max(0, threshold - 18);

    const nextScrolled = scrolledRef.current
      ? y > exitThreshold
      : y > enterThreshold;

    if (nextScrolled !== scrolledRef.current) {
      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);
    }
  }, [threshold]);

  React.useEffect(() => {
    let frameId = 0;

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        onScroll();
        frameId = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
