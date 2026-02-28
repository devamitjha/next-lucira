"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchProductReviews } from "@/lib/api";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";



export default function ProductCard({ product, showAddToCart = true }) {

  // ================= COLOR STATE =================
  const [selectedColor, setSelectedColor] = useState(
    product.selectedColor || product.colors?.[0] || null
  );

  // ================= COLOR HELPERS =================
  const colorMap = {
    yellow: "#F2C94C",
    rose: "#F2A1A1",
    white: "#E5E5E5",
  };

  const getBaseColor = (color = "") => {
    const c = String(color).toLowerCase();
    if (c.includes("yellow")) return "yellow";
    if (c.includes("rose")) return "rose";
    if (c.includes("white")) return "white";
    return null;
  };

  const getUniqueBaseColors = (colors = []) => {
    const seen = new Set();
    const result = [];

    for (const c of colors) {
      const base = getBaseColor(c);
      if (!base || seen.has(base)) continue;
      seen.add(base);
      result.push(base);
    }

    const order = ["yellow", "rose", "white"];
    return order.filter((c) => result.includes(c));
  };

  const baseColors = getUniqueBaseColors(product.colors);

  // ================= SELECTED BASE COLOR =================
  const selectedBase = getBaseColor(selectedColor);

  // ================= SELECTED VARIANT =================
  const variant =
    product.variants?.find((v) => v.color === selectedColor) ||
    product.variants?.[0];

  // ================= IMAGE FILTERING =================
  const getImagesByColor = (color) => {
    if (!product.images || !color) return [];

    return product.images.filter((img) =>
      img.altText?.toLowerCase().includes(color.toLowerCase())
    );
  };

  const sliderImages = getImagesByColor(selectedBase);

  const finalImages =
    sliderImages.length > 0
      ? sliderImages
      : [
          {
            url: variant?.image || product.image,
          },
        ];

  // ================= PRICE =================
  const priceNumber = Number(variant?.price || 0);
  const comparePriceNumber = Number(variant?.compare_price || 0);

  const hasDiscount =
    comparePriceNumber > 0 && priceNumber < comparePriceNumber;

  const discountPercent = hasDiscount
    ? Math.round(
        ((comparePriceNumber - priceNumber) / comparePriceNumber) * 100
      )
    : 0;

  // ================= COLOR SELECT HANDLER =================
  const handleColorSelect = (base) => {
    const match = product.colors?.find(
      (c) => getBaseColor(c) === base
    );
    if (match) setSelectedColor(match);
  };

  // ================= REVIEWS =================
   // reviews state
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
      let canceled = false;
      async function load() {
        try {
          const data = await fetchProductReviews(product.id);
          if (!canceled) setReviews(data);
        } catch (e) {
          console.error("Error fetching reviews:", e);
        }
      }
      load();
      return () => {
        canceled = true;
      };
    }, [product.id]);
  const uniqueId = `swiper-${product.id}`;
  return (
    
      <div className="group xl:hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-md">
        {/* Product Image */}
        <div className="relative w-full bg-[#fafafa] rounded-lg overflow-hidden">
          <Link href={`/products/${product.handle}`} className="mix-blend-multiply">
            <Swiper
              spaceBetween={0}
              loop={true}
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                prevEl: `.custom-prev-${uniqueId}`,
                nextEl: `.custom-next-${uniqueId}`,
              }}
            >
              {finalImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    src={img.url}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Link>

          {/* Custom Navigation */}
          {finalImages.length > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-3 z-20">
              <button
                onClick={(e) => e.stopPropagation()}
                className={`custom-prev-${uniqueId} w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-md hover:bg-white transition cursor-pointer`}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={(e) => e.stopPropagation()}
                className={`custom-next-${uniqueId} w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-md hover:bg-white transition cursor-pointer`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Discount Badge */}

          {/* Discount Badge */}
          {/* {hasDiscount && (
            <Badge className="absolute top-3 left-3 bg-orange-500">
              -{discountPercent}%
            </Badge>
          )} */}
        </div>

        {/* Product Info */}
        <div className="w-full p-3">
          {/* first row - price on left, review on right */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                ₹{priceNumber.toLocaleString()}
              </span>
              {comparePriceNumber > 0 && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{comparePriceNumber.toLocaleString()}
                </span>
              )}
            </div>
            {reviews?.average >= 3 && (
              <div className="text-sm text-gray-500">
                ⭐ {reviews.average} ({reviews.count})
              </div>
            )}
          </div>

          {/* second row - title single line */}
          <h3 className="mt-2 mb-4 text-sm font-normal line-clamp-1 group-hover:text-primary transition">
            {product.title}
          </h3>

          {/* third row - colors left, view details on right */}
          <div className="flex justify-between items-center">
            {baseColors.length > 0 ? (
              <div className="flex gap-2 items-center">
                {baseColors.map((base) => (
                  <button
                    key={base}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorSelect(base);
                    }}
                    className={`w-5 h-5 rounded-full border-2 transition cursor-pointer ${
                      selectedBase === base ? "border-gray-400" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: colorMap[base] || "#ccc" }}
                    title={base}
                  />
                ))}
              </div>
            ) : (
              <div />
            )}
            <span className="text-sm text-primary font-medium">View details</span>
          </div>

          {/* Add to Cart Button (always enabled for made-to-order) */}
          {showAddToCart && (
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="w-full mt-2"
              size="sm"
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    
  );
}
