"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/photos/desktop-cs-foto101.webp",
    alt: "Reunión de asesoría legal entre dos profesionales",
    position: "hero-carousel__image--one",
  },
  {
    src: "/assets/photos/hero-slide-2.webp",
    alt: "Dos profesionales revisando información durante una reunión",
    position: "hero-carousel__image--two",
  },
  {
    src: "/assets/photos/hero-slide-3.webp",
    alt: "Dos profesionales conversando mientras recorren una oficina",
    position: "hero-carousel__image--three",
  },
] as const;

const ROTATION_INTERVAL = 7_000;

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(interval);
  }, [activeSlide]);

  return (
    <>
      <div className="hero-carousel" aria-live="off">
        {slides.map((slide, index) => {
          const isActive = activeSlide === index;

          return (
            <div
              className={`hero-carousel__slide ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
              key={slide.src}
            >
              <Image
                className={`hero-carousel__image ${slide.position}`}
                src={slide.src}
                alt={isActive ? slide.alt : ""}
                fill
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      <div className="hero-carousel__controls" role="group" aria-label="Seleccionar imagen del banner">
        {slides.map((slide, index) => (
          <button
            className={activeSlide === index ? "is-active" : ""}
            type="button"
            aria-label={`Mostrar imagen ${index + 1} de ${slides.length}`}
            aria-current={activeSlide === index ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
            key={slide.src}
          />
        ))}
      </div>
    </>
  );
}
