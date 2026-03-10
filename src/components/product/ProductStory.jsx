"use client";

import Image from "next/image";

export default function ProductStory() {
  return (
    <section className="w-full max-w-360 mx-auto px-17 min-[1440px]:px-0 py-16">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}

        <div className="space-y-6">

          <h2 className="text-2xl font-semibold">
            Story Behind The Product
          </h2>

          <h3 className="text-lg italic font-medium">
            A Lifetime Ahead – Engagement Ring
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Designed for timeless elegance, this Round Cut engagement ring
            balances brilliance and refinement. The classic round center
            diamond delivers unmatched sparkle, while side diamonds add
            subtle depth.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Every detail is crafted to feel effortless, refined enough for
            a proposal, yet versatile enough to be worn for a lifetime.
          </p>

        </div>


        {/* RIGHT IMAGE */}

        <div className="relative w-full h-[280px] lg:h-[320px] rounded-xl overflow-hidden bg-gray-100">

          <Image
            src="/images/story-ring.jpg"
            alt="Story Behind Product"
            fill
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}