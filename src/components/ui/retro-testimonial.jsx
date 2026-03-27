"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, X } from "lucide-react";

import { cn } from "@/lib/utils";

const useOutsideClick = (ref, onOutsideClick, enabled = true) => {
  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const handleClickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [enabled, onOutsideClick, ref]);
};

const Carousel = ({ items }) => {
  const loopItems = [...items, ...items];

  const handleCardClose = (index) => {
    return index;
  };

  return (
    <div className="relative mt-10 w-full">
      <div className="w-full overflow-hidden py-5">
        <div
          className={cn(
            "pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-24 bg-gradient-to-r from-[#edf4ff] via-[rgba(237,244,255,0.92)] to-transparent backdrop-blur-[2px] lg:block"
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-24 bg-gradient-to-l from-[#edf4ff] via-[rgba(237,244,255,0.92)] to-transparent backdrop-blur-[2px] lg:block"
          )}
        />
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 42,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.08 * (index % items.length),
                  ease: "easeOut",
                },
              }}
              key={`card-${index}`}
              className="shrink-0"
            >
              {React.cloneElement(item, {
                onCardClose: () => handleCardClose(index % items.length),
              })}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
  layout = false,
  onCardClose = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const containerRef = useRef(null);

  const handleExpand = () => setIsExpanded(true);

  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    if (!isExpanded) {
      return undefined;
    }

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        handleCollapse();
      }
    };

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.body.dataset.scrollY = String(scrollY);

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      const savedScrollY = Number.parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, savedScrollY);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse, isExpanded);

  return (
    <>
      <AnimatePresence>
        {isExpanded ? (
          <div className="fixed inset-0 z-50 h-screen overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-[rgba(19,34,56,0.38)] backdrop-blur-lg"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              ref={containerRef}
              layoutId={layout ? `card-${testimonial.name}` : undefined}
              className="relative z-[60] mx-auto mt-4 flex h-[calc(100vh-2rem)] max-w-5xl flex-col rounded-[2rem] bg-gradient-to-b from-[#f2f0eb] to-[#fff9eb] p-4 text-left shadow-2xl md:mt-10 md:h-[calc(100vh-5rem)] md:p-10"
            >
              <button
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#4b3f33] text-white"
                onClick={handleCollapse}
                type="button"
                aria-label="Close testimonial"
              >
                <X className="h-5 w-5" />
              </button>

              <motion.p
                layoutId={layout ? `designation-${testimonial.name}` : undefined}
                className="px-0 text-lg font-light uppercase tracking-[0.2em] text-[rgba(31,27,29,0.72)] underline underline-offset-8 md:px-20"
              >
                {testimonial.designation}
              </motion.p>

              <motion.p
                layoutId={layout ? `title-${testimonial.name}` : undefined}
                className="mt-4 px-0 text-3xl italic lowercase text-[rgba(31,27,29,0.85)] md:px-20 md:text-5xl"
              >
                {testimonial.name}
              </motion.p>

              <div className="overflow-y-auto py-8 md:px-20">
                <div className="text-[rgba(31,27,29,0.82)]">
                  <Quote className="mb-4 h-7 w-7" />
                  <p className="text-xl font-light leading-relaxed tracking-wide lowercase md:text-3xl">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${testimonial.name}` : undefined}
        onClick={handleExpand}
        className="text-left"
        type="button"
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          rotate: 1.5,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div className="relative flex h-[500px] w-[19rem] flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#f2f0eb] to-[#fff9eb] px-6 shadow-[0_20px_50px_rgba(55,46,34,0.12)] md:h-[550px] md:w-96">
          <div className="absolute inset-0 opacity-30">
            <img
              className="h-full w-full object-cover object-center"
              src={backgroundImage}
              alt=""
              loading="lazy"
            />
          </div>

          <ProfileImage
            src={testimonial.profileImage}
            alt={testimonial.name}
            isLoaded={isImageLoaded}
            onLoad={() => setIsImageLoaded(true)}
          />

          <motion.p
            layoutId={layout ? `title-${testimonial.name}` : undefined}
            className="relative z-10 mt-5 text-center text-2xl font-normal lowercase text-[rgba(31,27,29,0.82)] [text-wrap:balance]"
          >
            {testimonial.description.length > 110
              ? `${testimonial.description.slice(0, 110)}...`
              : testimonial.description}
          </motion.p>

          <motion.p
            layoutId={layout ? `name-${testimonial.name}` : undefined}
            className="relative z-10 mt-5 text-center text-2xl italic lowercase text-[rgba(31,27,29,0.82)]"
          >
            {testimonial.name}
          </motion.p>

          <motion.p
            layoutId={layout ? `designation-${testimonial.name}` : undefined}
            className="relative z-10 mt-1 text-center text-sm uppercase tracking-[0.18em] text-[rgba(31,27,29,0.68)] underline underline-offset-8"
          >
            {testimonial.designation.length > 34
              ? `${testimonial.designation.slice(0, 34)}...`
              : testimonial.designation}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

const ProfileImage = ({ src, alt, isLoaded, onLoad }) => {
  return (
    <div className="relative z-10 h-[90px] w-[90px] flex-none overflow-hidden rounded-full border-[3px] border-solid border-[rgba(59,59,59,0.6)] opacity-85 saturate-[0.35] sepia-[0.35] md:h-[150px] md:w-[150px]">
      <img
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition duration-300",
          isLoaded ? "blur-0" : "blur-sm"
        )}
        onLoad={onLoad}
        src={src}
        alt={alt || "Profile image"}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export { Carousel, TestimonialCard, ProfileImage };
