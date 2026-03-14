"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

const IMAGES = [
  "/images/product/1.jpg",
  "/images/product/2.jpg",
  "/images/product/3.jpg",
  "/images/product/4.jpg",
];

export default function InstagramFeed() {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-480 mx-auto px-6 md:px-17 text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-medium mb-3">Follow Us On Instagram</h2>
         <Link href="https://instagram.com/lucirajewelry" className="text-[#b67665] font-bold tracking-widest text-sm flex items-center justify-center gap-2 hover:underline">
            <Instagram size={18} />
            @lucira_jewelry
         </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        {IMAGES.map((img, index) => (
          <div key={index} className="relative aspect-square overflow-hidden group">
            <Image src={img} alt={`Instagram ${index + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <Instagram size={32} className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
