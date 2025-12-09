// Improved, polished, production-ready TestimonialsSection
// Clean layout, stricter UI/UX hierarchy, smoother motion, better spacing

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollSpeed = 1.1;
    let interval: ReturnType<typeof setInterval> | null = null;
    let isPaused = false;

    const autoScroll = () => {
      if (isPaused || !carousel) return;
      carousel.scrollLeft += scrollSpeed;

      const halfWidth = carousel.scrollWidth / 2;
      if (carousel.scrollLeft >= halfWidth) {
        carousel.scrollLeft = carousel.scrollLeft - halfWidth;
      }
    };

    const start = () => {
      if (!interval) interval = setInterval(autoScroll, 18);
    };

    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    start();

    const handleEnter = () => {
      isPaused = true;
      stop();
    };
    const handleLeave = () => {
      isPaused = false;
      start();
    };

    carousel.addEventListener("mouseenter", handleEnter);
    carousel.addEventListener("mouseleave", handleLeave);
    carousel.addEventListener("touchstart", handleEnter);
    carousel.addEventListener("touchend", handleLeave);

    return () => {
      stop();
      carousel.removeEventListener("mouseenter", handleEnter);
      carousel.removeEventListener("mouseleave", handleLeave);
      carousel.removeEventListener("touchstart", handleEnter);
      carousel.removeEventListener("touchend", handleLeave);
    };
  }, []);

  const testimonials = [
    {
      quote: "Knee pain reduced in 2 visits, doctor explained everything clearly.",
      author: "Patient 1",
    },
    {
      quote: "Back pain improved quickly with clear guidance.",
      author: "Patient 2",
    },
    {
      quote: "Doctor explained every detail—very professional.",
      author: "Patient 3",
    },
    {
      quote: "Friendly staff and comfortable environment.",
      author: "Patient 4",
    },
  ];

  // Duplicate items to allow seamless infinite scroll without visible jump
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="bg-[#f3f7fc] py-16 px-5 md:px-[5%] scroll-mt-[70px]"
    >
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Section Header */}
        <p className="text-sm tracking-wide text-[#0f5fcc] font-semibold mb-2 uppercase">
          Testimonials
        </p>

        <h3 className="text-[32px] md:text-[38px] font-bold text-[#0f5fcc] leading-tight mb-10">
          Real Patients. <br /> Real Results.
        </h3>

        <div
          className="relative w-full overflow-hidden py-3"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            ref={carouselRef}
            className="flex gap-6 md:gap-7 pl-1 overflow-x-auto scroll-smooth scroll-snap-x-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none]"
            style={{ scrollSnapType: "x mandatory" }}
          >
             {loopedTestimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.15, ease: "easeOut" }}
                 className="bg-white border border-[#0f5fcc] rounded-2xl shadow-[0_10px_24px_rgba(15,95,204,0.08)] p-6 md:p-7 min-w-[260px] max-w-[300px] scroll-snap-align-start shrink-0 text-[#0f5fcc]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d8e4f8] mb-4" />
                <p className="text-base leading-relaxed mb-3">{t.quote}</p>
                <footer className="text-sm text-[#7c8bb0] font-medium">— {t.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-row::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}