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
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Heart, Play, Star, ShieldCheck, Library, SquareStack, CirclePlay } from "lucide-react";

export default function ProductCard({ product, showAddToCart = false }) {
  // ================= COLOR STATE =================
  const initialVariant = product.variants?.find((v) => v.inStock) || product.variants?.[0];
  const [selectedColor, setSelectedColor] = useState(
    initialVariant?.color || product.selectedColor || "white"
  );

  // ================= COLOR HELPERS =================
  const colorMap = {
    yellow: "#E2C07E",
    rose: "#E9B4AB",
    white: "#E5E4E2",
  };

  const getBaseColor = (color = "") => {
    const c = String(color).toLowerCase();
    // Prioritize specific metal colors over the generic word "gold"
    if (c.includes("rose")) return "rose";
    if (c.includes("white") || c.includes("silver") || c.includes("platinum")) return "white";
    if (c.includes("yellow") || c.includes("gold")) return "yellow";
    return "white";
  };

  const getUniqueBaseColors = (colors = []) => {
    const order = ["white", "yellow", "rose"];
    const availableBaseColors = new Set();
    colors.forEach(c => {
      const base = getBaseColor(c);
      if (base) availableBaseColors.add(base);
    });
    return order.filter(c => availableBaseColors.has(c));
  };

  const baseColors = getUniqueBaseColors(product.colors || []);

  // ================= SELECTED BASE COLOR =================
  const selectedBase = getBaseColor(selectedColor);

  // ================= SELECTED VARIANT =================
  const variant =
    product.variants?.find((v) => getBaseColor(v.color || v.title) === selectedBase) ||
    product.variants?.[0];

  // ================= IMAGE FILTERING =================
  const getImagesByVariant = () => {
    if (!product.images) return [];
    
    // 1. Try filtering by the variant's specific altText
    if (variant?.altText) {
      const filtered = product.images.filter((img) =>
        img.altText?.toLowerCase().includes(variant.altText.toLowerCase())
      );
      if (filtered.length > 0) return filtered;
    }

    // 2. Fallback to base color filtering if altText didn't work
    if (selectedBase) {
      const filtered = product.images.filter((img) =>
        img.altText?.toLowerCase().includes(selectedBase.toLowerCase())
      );
      if (filtered.length > 0) return filtered;
    }

    // 3. Last fallback: return the variant image or all images
    return variant?.image ? [{ url: variant.image }] : product.images || [];
  };

  const finalImages = getImagesByVariant();

  // ================= PRICE =================
  const priceNumber = Number(variant?.price || product.price || 0);
  const comparePriceNumber = Number(variant?.compare_price || product.compare_at_price || 0);

  const hasDiscount = comparePriceNumber > 0 && priceNumber < comparePriceNumber;
  const discountPercent = hasDiscount
    ? Math.round(((comparePriceNumber - priceNumber) / comparePriceNumber) * 100)
    : 0;

  // ================= COLOR SELECT HANDLER =================
  const handleColorSelect = (base) => {
    // Find the first variant matching this base color
    const match = product.variants?.find(
      (v) => getBaseColor(v.color || v.title) === base
    );
    if (match) setSelectedColor(match.color || match.title);
  };

  // ================= REVIEWS =================
  const [reviews, setReviews] = useState({ average: 4.8, count: 0 }); 

  useEffect(() => {
    let canceled = false;
    async function load() {
      try {
        const data = await fetchProductReviews(product.id);
        if (!canceled && data) setReviews(data);
      } catch (e) {
        console.error("Error fetching reviews:", e);
      }
    }
    load();
    return () => { canceled = true; };
  }, [product.id]);

  const uniqueId = `swiper-${product.id.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className="group transition-all duration-300 cursor-pointer bg-white overflow-hidden flex flex-col h-full">
      {/* Product Image Section */}
      <div className="relative aspect-square w-full bg-[#fafafa] overflow-hidden">
        <Link href={`/products/${product.handle}`} className="block w-full h-full mix-blend-multiply">
          <Swiper
            spaceBetween={0}
            loop={true}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              prevEl: `.custom-prev-${uniqueId}`,
              nextEl: `.custom-next-${uniqueId}`,
            }}
            className="w-full h-full"
          >
            {finalImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={img.url}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                  className="object-contain p-4"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>


        {/* Product Label (New, Best Seller, etc) */}
        {product.label && (
          <div className="absolute top-3 left-0 z-10 bg-[#E5E7EB] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
            {product.label}
          </div>
        )}

        {/* Wishlist Icon */}
        <button className="absolute top-4 right-4 z-10 p-1.5 hover:scale-110 transition-transform">
          <Heart size={24} className="text-black stroke-[1.5px]" />
        </button>

        {/* Play Icon */}
        {product.video && (
          <button className="absolute bottom-4 left-4 z-10 flex items-center justify-center">
            <CirclePlay  size={28} className="text-black stroke-[1.25px]" />
          </button>
        )}

        {/* Gallery Icon */}
        {finalImages.length > 1 && (
          <div className="absolute bottom-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100">
            <SquareStack size={20} className="text-black stroke-[1.5px]" />
          </div>
        )}

        {/* Custom Navigation Arrows */}
        <button
          className={`custom-prev-${uniqueId} absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className={`custom-next-${uniqueId} absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col gap-2 pt-4 px-1">
        {/* Color Swatches */}
        <div className="flex gap-3 mb-1">
          {baseColors.map((base) => (
            <button
              key={base}
              onClick={(e) => {
                e.preventDefault();
                handleColorSelect(base);
              }}
              className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                selectedBase === base ? "border-black p-0.5" : "border-transparent"
              }`}
            >
              <span 
                className="w-full h-full rounded-full border border-gray-200"
                style={{ backgroundColor: colorMap[base] }}
              />
            </button>
          ))}
        </div>

        {/* Product Title */}
        <Link href={`/products/${product.handle}`}>
          <h3 className="text-xl font-bold underline underline-offset-4 decoration-1 leading-tight hover:text-gray-700 transition-colors line-clamp-1 min-h-[1.75rem]">
            {product.title}
          </h3>
        </Link>

        {/* Product Metadata */}
        <p className="text-sm text-gray-600 mt-1 line-clamp-1">
          {product.description || product.shortDescription || "3.60cts • six-prong setting • VVS-VS, EF • 3.50 g"}
        </p>

        {/* Offer Badge */}
        <div className="flex items-center gap-1.5 bg-[#F0F9F4] text-[#108548] px-2 py-1 rounded-full w-fit mt-1">
          <ShieldCheck size={14} />
          <span className="text-xs font-semibold">20% OFF on Diamond Prices</span>
        </div>

        {/* Price & Rating Section */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black">
              ₹{priceNumber.toLocaleString()}
            </span>
            {comparePriceNumber > priceNumber && (
              <span className="text-base text-gray-400 line-through">
                ₹{comparePriceNumber.toLocaleString()}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="bg-[#E5E7EB] text-black px-2 py-0.5 rounded-full text-xs font-bold">
                {discountPercent}% OFF
              </span>
            )}
          </div>
          {reviews.average >= 1 && (
            <div className="flex items-center gap-1 shrink-0">
              <Star size={16} className="fill-black text-black" />
              <span className="text-sm font-medium text-gray-700">{reviews.average}</span>
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        {showAddToCart && (
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-full mt-3 bg-black text-white hover:bg-gray-800"
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}
