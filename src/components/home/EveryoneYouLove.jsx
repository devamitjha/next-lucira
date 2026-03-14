"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ITEMS = [
  { name: "For Her", image: "/images/product/1.jpg", href: "/collections/for-her" },
  { name: "For Him", image: "/images/product/2.jpg", href: "/collections/for-him" },
  { name: "For Mothers", image: "/images/product/3.jpg", href: "/collections/for-mothers" },
  { name: "For Kids", image: "/images/product/4.jpg", href: "/collections/for-kids" },
];

export default function EveryoneYouLove() {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-480 mx-auto px-6 md:px-17 text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-medium mb-3">For Everyone You Love</h2>
         <p className="text-gray-500">Gifts that celebrate your special bonds.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
        {ITEMS.map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            className="relative aspect-square overflow-hidden group bg-gray-100"
          >
            <Image 
              src={item.image} 
              alt={item.name} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white">
              <span className="text-xl md:text-2xl font-medium tracking-wide">{item.name}</span>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
