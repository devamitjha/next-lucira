"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const POSTS = [
  {
    category: "Guides",
    date: "12 May 2026",
    title: "How Many Types Of Diamonds: A Comprehensive 2026 Guide",
    image: "/images/product/1.jpg",
  },
  {
    category: "Lifestyle",
    date: "10 May 2026",
    title: "What is Net Gold? Your Complete Guide to Affordable Luxury",
    image: "/images/product/2.jpg",
  },
  {
    category: "Fashion",
    date: "08 May 2026",
    title: "Valentine Day Gift For Wife: Elegant Jewelry Ideas",
    image: "/images/product/3.jpg",
  },
  {
    category: "Lifestyle",
    date: "05 May 2026",
    title: "Elegant Diamond Nose Pin Design Collection by Lucira Jewelry",
    image: "/images/product/4.jpg",
  }
];

export default function JewelryBlog() {
  return (
    <section className="w-full py-16 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-480 mx-auto px-6 md:px-17 text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-medium mb-3">Jewelry Blog By Lucira</h2>
      </div>

      <div className="max-w-480 mx-auto px-6 md:px-17 relative group">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {POSTS.map((post, index) => (
            <SwiperSlide key={index}>
              <Link href="#" className="flex flex-col h-full group/post bg-white overflow-hidden rounded-sm border border-gray-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover/post:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-gray-400 mb-2 uppercase tracking-widest">{post.date}</span>
                  <h3 className="text-lg font-medium leading-tight group-hover/post:text-[#b67665] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="flex justify-center mt-12">
            <Button variant="outline" className="h-12 px-10 rounded-sm border-black text-black text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all uppercase">
              READ ALL BLOGS
            </Button>
        </div>
      </div>
    </section>
  );
}
