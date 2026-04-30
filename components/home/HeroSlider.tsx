"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    src: "/images/hero-1.webp",
    alt: "Kuşadası sahil manzarası",
  },
  {
    src: "/images/hero-2.webp",
    alt: "Kuşadası gece manzarası",
  },
  {
    src: "/images/hero-3.webp",
    alt: "Kuşadası marina manzarası",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden bg-black md:h-[720px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.src}
            className="relative h-full w-full overflow-hidden"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero-slider-image object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none mt-16 absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-3 text-sm font-semibold tracking-[0.45em]">KUŞADASI</p>

        <h1 className="font-serif text-5xl font-light tracking-wide md:text-7xl">
          Cafe Roma
        </h1>
      </div>
    </section>
  );
}
