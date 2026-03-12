"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Round Cut Engagement Ring with Pear Diamond...",
    price: 99970,
    originalPrice: 126008,
    discount: "21% OFF",
    rating: 4.8,
    specs: "3.60cts • six-prong setting • VVS-VS, EF • 3.50 g",
    image: "/images/product/1.jpg",
  },
  {
    id: 2,
    title: "Round Cut Engagement Ring with Half Eternity...",
    price: 99970,
    originalPrice: 126008,
    discount: "21% OFF",
    rating: 4.8,
    specs: "3.60cts • six-prong setting • VVS-VS, EF • 3.50 g",
    image: "/images/product/2.jpg",
  },
  {
    id: 3,
    title: "Round Cut Engagement Ring with Ha...",
    price: 99970,
    originalPrice: 126008,
    discount: "21% OFF",
    rating: 4.8,
    specs: "3.60cts • six-prong setting • VVS-VS, EF • 3.50 g",
    image: "/images/product/3.jpg",
  }
];

export default function WearThisWith() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="pt-4 border-t border-gray-100">
      <h2 className="text-base font-semibold text-black mb-4">Wear This With:</h2>      
      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          navigation={{
            prevEl: '.wear-prev',
            nextEl: '.wear-next',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2.2 },
          }}
          className="w-full"
        >
          {SAMPLE_PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex flex-col gap-4">
                {/* Image */}
                <div className="aspect-square bg-[#F7F7F7] rounded-lg relative overflow-hidden">
                  <Image src={product.image} alt={product.title} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black/10">
                    <div className="h-full bg-black w-1/2"></div>
                  </div>
                </div>

                {/* Swatches */}
                <div className="flex gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#E5E4E2] border border-gray-200"></div>
                  <div className="w-6 h-6 rounded-full bg-[#E2C07E] border border-black ring-1 ring-black ring-offset-1"></div>
                  <div className="w-6 h-6 rounded-full bg-[#E9B4AB] border border-gray-200"></div>
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                  <h3 className="text-[15px] font-bold text-black leading-tight line-clamp-1">{product.title}</h3>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={14} fill="black" className="text-black" />
                      ))}
                    </div>
                    <span className="text-[13px] font-bold text-black ml-1">{product.rating}</span>
                  </div>
                  <p className="text-[13px] text-gray-500 font-medium line-clamp-2 leading-snug">
                    {product.specs}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[16px] font-bold text-black">₹{product.price.toLocaleString()}</span>
                    <span className="text-[14px] text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="bg-[#F2F2F2] text-black text-[11px] font-bold px-2 py-0.5 rounded-full">
                      {product.discount}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls Row */}
        <div className="flex items-center justify-between mt-8">
          {/* Custom Pagination (Dots) */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className={`transition-all duration-300 rounded-full ${
                  activeSlide === i ? "w-6 h-2 bg-black" : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button className="wear-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all disabled:opacity-30">
              <ChevronLeft size={20} />
            </button>
            <button className="wear-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all disabled:opacity-30">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
