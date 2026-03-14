"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const ITEMS = [
  { id: 1, image: "/images/product/1.jpg", isVideo: true },
  { id: 2, image: "/images/product/2.jpg", isVideo: false },
  { id: 3, image: "/images/product/3.jpg", isVideo: false },
  { id: 4, image: "/images/product/4.jpg", isVideo: true },
  { id: 5, image: "/images/product/5.jpg", isVideo: true },
];

export default function StyledByLucira() {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-480 mx-auto px-6 md:px-17 text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-medium">Styled By Lucira</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 md:px-0">
        {ITEMS.map((item, index) => (
          <div key={index} className="relative aspect-[3/4] overflow-hidden group">
            <Image 
              src={item.image} 
              alt={`Styled by Lucira ${index + 1}`} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {item.isVideo && (
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white border border-white/40">
                    <Play size={24} fill="currentColor" />
                  </div>
               </div>
            )}
            <div className="absolute top-4 right-4">
               <div className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                  <Image src="/images/icons/diamond.svg" alt="Hotspot" width={16} height={16} className="brightness-0 invert" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
