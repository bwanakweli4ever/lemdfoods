"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface SlideData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  badge: string;
}

interface AfroHeroSliderProps {
  slides: SlideData[];
  autoPlayMs?: number;
}

/**
 * AfroHeroSlider – a modern, African-pattern hero slider for websites
 *
 * Usage:
 * <AfroHeroSlider
 *   slides={[
 *     {
 *       title: "Online Food Shopping",
 *       subtitle:
 *         "Wide range of African groceries at fair prices. Fresh, authentic, delivered.",
 *       ctaText: "Shop now",
 *       ctaHref: "#shop",
 *       imageSrc: "https://images.unsplash.com/photo-1586201375754-1421e0aa2f0c?q=80&w=1400&auto=format&fit=crop", // replace with your image
 *       badge: "AfroFresh"
 *     },
 *     {
 *       title: "Spices & Flavours",
 *       subtitle:
 *         "Hand-picked seasonings and mixes – suya, pepper soup, jollof and more.",
 *       ctaText: "Explore spices",
 *       ctaHref: "#spices",
 *       imageSrc: "https://images.unsplash.com/photo-1505575972945-281d34b3e09b?q=80&w=1400&auto=format&fit=crop",
 *       badge: "BOLD TASTE"
 *     },
 *     {
 *       title: "Healthy Grains",
 *       subtitle: "Millet, sorghum, fonio & more – 100% natural.",
 *       ctaText: "Browse grains",
 *       ctaHref: "#grains",
 *       imageSrc: "https://images.unsplash.com/photo-1621261289818-8b0cd328b8ff?q=80&w=1400&auto=format&fit=crop",
 *       badge: "Naturally Good"
 *     }
 *   ]}
 *   autoPlayMs={5500}
 * />
 *
 * To use your uploaded images, replace imageSrc with your file URLs.
 */

const Pattern = () => (
  <div className="absolute inset-0 -z-10 h-full w-full opacity-30">
    <Image
      src="/images/geometric-pattern.webp"
      alt="Geometric Pattern"
      fill
      className="object-cover"
    />
  </div>
);

const Slide = ({ slide, index, active }) => {
  return (
    <div className="relative grid min-h-[68vh] w-full grid-cols-1 overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl md:grid-cols-2">
      <Pattern />

      {/* Copy */}
      <div className="relative z-10 flex flex-col items-start justify-center gap-6 p-8 md:p-14">
        {slide.badge && (
          <span className="rounded-full bg-white/10 px-4 py-1 text-xs tracking-widest text-white backdrop-blur">
            {slide.badge}
          </span>
        )}
        <motion.h2
          key={`title-${index}-${active}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          {slide.title}
        </motion.h2>
        <motion.p
          key={`sub-${index}-${active}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="max-w-xl text-base text-white/80 md:text-lg"
        >
          {slide.subtitle}
        </motion.p>
        {slide.ctaText && (
          <motion.a
            href={slide.ctaHref || "#"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 font-semibold text-slate-900 transition hover:translate-y-[-1px] hover:bg-amber-300 active:translate-y-[0px]"
          >
            {slide.ctaText}
          </motion.a>
        )}
        <div className="mt-6 flex -space-x-2">
          <span className="h-2 w-8 rounded bg-amber-500/80" />
          <span className="h-2 w-4 rounded bg-emerald-500/80" />
          <span className="h-2 w-4 rounded bg-red-500/80" />
        </div>
      </div>

      {/* Image */}
      <div className="relative bg-gradient-to-br from-emerald-300/20 via-emerald-400/25 to-green-500/30 backdrop-blur-sm">
        <motion.div
          key={`img-${index}-${active}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full"
        >
          <Image
            src={slide.imageSrc}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            onError={(e) => {
              console.log('Image failed to load:', slide.imageSrc);
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>
        {/* Curved overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-28 bg-gradient-to-r from-emerald-500/40 to-emerald-400/30 backdrop-blur-sm md:block"></div>
      </div>
    </div>
  );
};

export default function AfroHeroSlider({ slides = [], autoPlayMs = 6000 }: AfroHeroSliderProps) {
  const [active, setActive] = useState(0);
  const count = slides.length;

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setActive((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(next, autoPlayMs);
    return () => clearInterval(id);
  }, [next, autoPlayMs, count]);

  if (!count) return null;

  return (
    <div className="relative w-full">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <Slide slide={slides[active]} index={active} active={active} />
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        {count > 1 && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-3">
            <button
              onClick={prev}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Dots */}
      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 w-7 rounded-full transition ${
                i === active ? "bg-amber-400" : "bg-white/20 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Tailwind tips:
// - Set your page background to slate-950 or neutral-950 for strong contrast.
// - Add font-display: swap and a bold display font (e.g., "Plus Jakarta Sans" or "Manrope").
// - Colors chosen nod to Kente palette (amber/emerald/red) but remain modern/minimal.
