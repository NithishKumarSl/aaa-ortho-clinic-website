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
      img: "/Testimonialsimg/t1.png",
    },
    {
      quote: "Back pain improved quickly with clear guidance.",
      author: "Patient 2",
      img: "/Testimonialsimg/t2.png",
    },
    {
      quote: "Doctor explained every detail—very professional.",
      author: "Patient 3",
      img: "/Testimonialsimg/t3.png",
    },
    {
      quote: "Friendly staff and comfortable environment.",
      author: "Patient 4",
      img: "/Testimonialsimg/t4.png",
    },
  ];

  // Duplicate items to allow seamless infinite scroll without visible jump
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="bg-[#f3f7fc] py-12 sm:py-16 px-5 sm:px-6 md:px-[5%] scroll-mt-[70px]"
    >
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Section Header */}
        <p className="text-xs sm:text-sm tracking-wide text-[#0a65d9] font-semibold mb-3 sm:mb-4 uppercase">
          Testimonials
        </p>

        <h3 className="text-[32px] sm:text-[36px] md:text-[38px] font-bold text-[#0a65d9] leading-tight mb-10 sm:mb-12 md:mb-10 text-left">
          Real Patients. <br className="hidden sm:block" /> Real Results.
        </h3>

        <div
          className="relative w-full overflow-hidden py-4 -mx-5 sm:-mx-6 md:mx-0"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            ref={carouselRef}
            className="flex gap-5 sm:gap-6 md:gap-7 pl-5 sm:pl-6 md:pl-1 overflow-x-auto scroll-smooth scroll-snap-x-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none]"
            style={{ scrollSnapType: "x mandatory" }}
          >
             {loopedTestimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.15, ease: "easeOut" }}
                 className="bg-white border-2 border-[#d8e7ff] rounded-xl sm:rounded-2xl shadow-[0_10px_24px_rgba(15,95,204,0.08)] p-6 sm:p-6 md:p-7 min-w-[280px] sm:min-w-[300px] max-w-[300px] scroll-snap-align-start shrink-0 text-[#0a65d9] hover:border-[#0a65d9] transition-colors"
              >
                <img
                  src={t.img}
                  alt={`${t.author} testimonial`}
                  className="w-14 h-14 sm:w-14 sm:h-14 rounded-xl sm:rounded-xl object-cover mb-4 sm:mb-5"
                  loading="lazy"
                />
                <p className="text-base sm:text-base leading-relaxed mb-4">{t.quote}</p>
                <footer className="text-sm sm:text-sm text-[#7c8bb0] font-medium">— {t.author}</footer>
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