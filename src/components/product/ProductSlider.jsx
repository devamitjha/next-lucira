"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { useId } from "react";

const STATIC_PRODUCTS = [
  {
    id: "1",
    handle: "brilliant-round-six-prong-solitaire-stud-earrings-1",
    title: "3.60cts Brilliant Round Six-Prong Solitaire Stud Earrings",
    label: "NEW",
    colors: ["white", "yellow", "rose"],
    price: 147773,
    compare_at_price: 184853,
    description: "3.60cts • six-prong setting • VVS-VS, EF • 3.50 g",
    images: [{ url: "/images/product/1.jpg", altText: "white" }],
    variants: [
      { id: "v1", color: "white", price: 147773, compare_price: 184853, inStock: true },
      { id: "v2", color: "yellow", price: 147773, compare_price: 184853, inStock: true },
      { id: "v3", color: "rose", price: 147773, compare_price: 184853, inStock: true }
    ]
  },
  {
    id: "2",
    handle: "brilliant-round-six-prong-solitaire-stud-earrings-2",
    title: "3.60cts Brilliant Round Six-Prong Solitaire Stud Earrings",
    colors: ["white", "yellow", "rose"],
    price: 147773,
    compare_at_price: 184853,
    description: "3.60cts • six-prong setting • VVS-VS, EF • 3.50 g",
    images: [{ url: "/images/product/2.jpg", altText: "white" }],
    variants: [
      { id: "v1", color: "white", price: 147773, compare_price: 184853, inStock: true }
    ]
  },
  {
    id: "3",
    handle: "brilliant-round-six-prong-solitaire-stud-earrings-3",
    title: "3.60cts Brilliant Round Six-Prong Solitaire Stud Earrings",
    label: "Best Seller",
    colors: ["white", "yellow", "rose"],
    price: 147773,
    compare_at_price: 184853,
    description: "3.60cts • six-prong setting • VVS-VS, EF • 3.50 g",
    images: [{ url: "/images/product/3.jpg", altText: "white" }],
    variants: [
      { id: "v1", color: "white", price: 147773, compare_price: 184853, inStock: true }
    ]
  },
  {
    id: "4",
    handle: "brilliant-round-six-prong-solitaire-stud-earrings-4",
    title: "3.60cts Brilliant Round Six-Prong Solitaire Stud Earrings",
    colors: ["white", "yellow", "rose"],
    price: 147773,
    compare_at_price: 184853,
    description: "3.60cts • six-prong setting • VVS-VS, EF • 3.50 g",
    images: [{ url: "/images/product/4.jpg", altText: "white" }],
    variants: [
      { id: "v1", color: "white", price: 147773, compare_price: 184853, inStock: true }
    ]
  },
  {
    id: "5",
    handle: "brilliant-round-six-prong-solitaire-stud-earrings-5",
    title: "3.60cts Brilliant Round Six-Prong Solitaire Stud Earrings",
    colors: ["white", "yellow", "rose"],
    price: 147773,
    compare_at_price: 184853,
    description: "3.60cts • six-prong setting • VVS-VS, EF • 3.50 g",
    images: [{ url: "/images/product/5.jpg", altText: "white" }],
    variants: [
      { id: "v1", color: "white", price: 147773, compare_price: 184853, inStock: true }
    ]
  }
];

export function ProductSlider({ title, subtitle, products = STATIC_PRODUCTS }) {
  const id = useId().replace(/:/g, "");
  
  const prevElClass = `prev-${id}`;
  const nextElClass = `next-${id}`;
  const paginationElClass = `pagination-${id}`;

  return (
    <section className="w-full bg-white overflow-hidden mt-15">
      <div className="max-w-480 mx-auto px-17 min-[1440px]:px-17">
        {(title || subtitle) && (
          <div className="mb-10">
            {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
            {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
          </div>
        )}

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={{
              nextEl: `.${nextElClass}`,
              prevEl: `.${prevElClass}`,
            }}
            pagination={{
              el: `.${paginationElClass}`,
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} !w-8 !h-1 !rounded-full !bg-gray-200 transition-all duration-300 [&.swiper-pagination-bullet-active]:!bg-black"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="w-full overflow-visible!"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation & Pagination Controls */}
          <div className="flex justify-between items-center mt-12 px-2">
            <div className={`${paginationElClass} flex items-center gap-2`}></div>
            
            <div className="flex items-center gap-4">
              <button className={`${prevElClass} w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all`}>
                <ChevronLeft size={24} />
              </button>
              <button className={`${nextElClass} w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all`}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .${paginationElClass} {
          position: static !important;
          width: auto !important;
        }
        .${paginationElClass} .swiper-pagination-bullet {
          margin: 0 !important;
        }
      `}</style>
    </section>
  );
}
