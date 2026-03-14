"use client";

import Image from "next/image";

export default function NoteFromFounder() {
  return (
    <section className="w-full py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-480 mx-auto px-6 md:px-17">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gray-200">
             <Image src="/images/product/6.jpg" alt="Founder" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center max-w-xl">
             <span className="text-[#b67665] font-bold uppercase tracking-widest text-sm mb-6 block">A Note From Our Founder</span>
             <h2 className="text-3xl md:text-5xl italic font-serif leading-tight mb-8">
               “Jewelry is not just about the shine, it&apos;s about the soul. Each piece we create is a celebration of your unique journey and timeless moments.”
             </h2>
             <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
               Since our inception, Lucira has been dedicated to crafting jewelry that resonates with elegance, sustainability, and unparalleled craftsmanship. We are here to make your special moments even more memorable.
             </p>
             <div className="flex flex-col gap-2">
                <span className="text-2xl font-medium tracking-wide">Rishabh Jain</span>
                <span className="text-gray-400 text-sm uppercase tracking-widest">Founder & CEO, Lucira Jewelry</span>
             </div>
             <div className="mt-10 opacity-30">
                <Image src="/images/logo.svg" alt="Signature" width={150} height={50} className="grayscale" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
