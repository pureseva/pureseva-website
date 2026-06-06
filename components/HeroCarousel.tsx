"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function HeroCarousel({
  slides,
  startIndex = 0,
  intervalMs = 4000,
  sizes = "240px",
}: {
  slides: Slide[];
  startIndex?: number;
  intervalMs?: number;
  sizes?: string;
}) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes={sizes}
          priority={i === startIndex}
          className={`hero-slide${i === index ? " visible" : ""}`}
        />
      ))}
    </div>
  );
}
