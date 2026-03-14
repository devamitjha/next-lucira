"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CuratedLooks() {
  return (
    <section className="w-full py-16 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-480 mx-auto px-6 md:px-17 text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-medium mb-3">Curated Looks For You</h2>
         <p className="text-gray-500">Find the jewelry that matches your unique style.</p>
      </div>

      <div className="max-w-480 mx-auto px-6 md:px-17">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
            <Image src="/images/product/1.jpg" alt="Look 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition-all">
                  <Plus size={24} />
                </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
            <Image src="/images/product/2.jpg" alt="Look 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-1/3 left-1/4">
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition-all">
                  <Plus size={24} />
                </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-[21/9] md:aspect-[3/1] overflow-hidden rounded-sm group">
            <Image src="/images/product/story-ring.jpg" alt="Look 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-10 left-10">
                <Button className="h-12 px-8 bg-white text-black hover:bg-white/90 font-bold tracking-widest text-xs uppercase">
                  VIEW ALL INSPIRATION
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
