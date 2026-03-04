"use client";

import Marquee from "react-fast-marquee";

export default function LuxuryMarquee() {
  const items = [
    "💎 Personalized Jewelry, Made for You",
    "🚚 Fast & Secure Shipping",
    "✔ Quality Control & Assurance",
    "✨ Bespoke Experience",
  ];

  return (
    <div className="relative bg-primary text-white py-4 overflow-hidden mt-6">

      {/* edge gradient fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-primary to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-primary to-transparent z-10"></div>

      <Marquee
        speed={100}
        pauseOnHover={true}
        gradient={false}
      >
        <div className="flex gap-10 whitespace-nowrap ml-10">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-md font-medium tracking-wide"
            >
              {item}
            </span>
          ))}
          {items.map((item, i) => (
            <span
              key={i}
              className="text-md font-medium tracking-wide"
            >
              {item}
            </span>
          ))}
        </div>
      </Marquee>

    </div>
  );
}