"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export default function OurProcess() {
  const steps = [
    {
      title: "Ideation & Sketching",
      desc: "Every ring begins as a refined concept inspired by timeless design. Ideas are translated into intentional sketches.",
      img: "/images/product/process/process1.jpg",
    },
    {
      title: "3D Designing",
      desc: "Sketches evolve into detailed 3D models. Every curve and setting is perfected before production.",
      img: "/images/product/process/process2.jpg",
    },
    {
      title: "Modeling & Casting",
      desc: "Designs are cast with precision for strength and accuracy. The foundation of a ring made to last.",
      img: "/images/product/process/process3.jpg",
    },
    {
      title: "Filing & Polishing",
      desc: "Artisans hand-file the metal to refine every edge and surface. Polishing is done in stages for a flawless finish.",
      img: "/images/product/process/process4.jpg",
    },
    {
      title: "Diamond Setting",
      desc: "Ethically sourced diamonds are carefully placed to ensure brilliance and durability.",
      img: "/images/product/process/process5.jpg",
    },
  ];

  return (
    <section className="w-full px-[68px] py-16">

      <div className="max-w-[1440px] mx-auto">

        <h2 className="text-xl font-semibold mb-8">
          Our Process
        </h2>

        <Swiper
          modules={[FreeMode]}
          spaceBetween={24}
          slidesPerView={4}
          freeMode
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >

          {steps.map((step, i) => (
            <SwiperSlide key={i}>

              <div className="space-y-4">

                {/* Image */}

                <div className="relative w-full h-[220px] rounded-lg overflow-hidden bg-gray-100">

                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* Text */}

                <div className="space-y-2">

                  <h3 className="font-semibold text-sm">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}