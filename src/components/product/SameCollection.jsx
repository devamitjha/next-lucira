"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

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

export function SameCollection() {
  return (
    <section className="w-full py-16 px-4 md:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">From the Same Collection</h2>
          <p className="text-gray-600 text-lg">
            Discover matching pieces that perfectly complement one another
          </p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.collection-next',
              prevEl: '.collection-prev',
            }}
            pagination={{
              el: '.collection-pagination',
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} !w-8 !h-1.5 !rounded-full !bg-gray-300 transition-all duration-300 [&.swiper-pagination-bullet-active]:!bg-black"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {STATIC_PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation & Pagination Controls */}
          <div className="flex justify-between items-center mt-12 px-2">
            <div className="collection-pagination flex items-center gap-2"></div>
            
            <div className="flex items-center gap-4">
              <button className="collection-prev w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <ChevronLeft size={24} />
              </button>
              <button className="collection-next w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .collection-pagination {
          position: static !important;
          width: auto !important;
        }
        .collection-pagination .swiper-pagination-bullet {
          margin: 0 !important;
        }
      `}</style>
    </section>
  );
}
