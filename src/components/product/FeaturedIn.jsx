"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function FeaturedIn() {

  const logos = [
    "/images/product/media/mediabrief.png",
    "/images/product/media/inc42.png",
    "/images/product/media/indiaretailing.png",
    "/images/product/media/bof.png",
    "/images/product/media/entrepreneur.png",
    "/images/product/media/jewelbuzz.png",
    "/images/product/media/madeinindia.png",
    "/images/product/media/bwdisrupt.png",
    "/images/product/media/retail.png",
  ];

  return (
    <section className="w-full py-16 bg-gray-50">

      <div className="w-full text-center space-y-8">
        <div className="max-w-360 mx-auto px-17 min-[1440px]:px-0">
          <h2 className="text-xl font-semibold">
            Featured In
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            “Lucira Jewelry focuses on modern fine jewellery, featuring
            lab-grown diamonds and expert craftsmanship.”
          </p>
      </div>

        {/* Marquee */}

        <div className="relative overflow-hidden">

          {/* edge fade */}

          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <Marquee
            speed={60}
            pauseOnHover={true}
            gradient={false}
          >

            <div className="flex items-center gap-16 px-8">

              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt="media logo"
                  width={120}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition"
                />
              ))}

              {/* duplicate for seamless loop */}

              {logos.map((logo, index) => (
                <Image
                  key={`dup-${index}`}
                  src={logo}
                  alt="media logo"
                  width={120}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition"
                />
              ))}

            </div>

          </Marquee>

        </div>

      </div>

    </section>
  );
}