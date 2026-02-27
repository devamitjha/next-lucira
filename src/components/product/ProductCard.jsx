"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(
    product.selectedColor || product.colors?.[0] || null
  );

  // helpers to convert raw color strings into a small palette
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

  const selectedBase = getBaseColor(selectedColor);

  const handleColorSelect = (base) => {
    const match = product.colors?.find((c) => getBaseColor(c) === base);
    if (match) setSelectedColor(match);
  };

  const variant = product.variants?.find(
    (v) => v.color === selectedColor
  ) || product.variants?.[0];
  const priceNumber = Number(variant?.price || 0);
  const comparePriceNumber = Number(variant?.compare_price || 0);

  const hasDiscount = comparePriceNumber > 0 && priceNumber < comparePriceNumber;

  const discountPercent = hasDiscount
    ? Math.round(((comparePriceNumber - priceNumber) / comparePriceNumber) * 100)
    : 0;

  return (
    <Link href={`/products/${product.handle}`}>
      <div className="group cursor-pointer">
        {/* Product Image */}
        <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
          <Image
            src={variant?.image || product.image}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-75 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Discount Badge */}

          {/* Discount Badge */}
          {hasDiscount && (
            <Badge className="absolute top-3 left-3 bg-orange-500">
              -{discountPercent}%
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition">
            {product.title}
          </h3>

          {/* Price */}
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

          {/* Colors */}
          {baseColors.length > 0 && (
            <div className="flex gap-2 items-center">
              {baseColors.map((base) => (
                <button
                  key={base}
                  onClick={(e) => {
                    e.preventDefault();
                    handleColorSelect(base);
                  }}
                  className={`w-5 h-5 rounded-full border-2 transition ${
                    selectedBase === base ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: colorMap[base] || "#ccc" }}
                  title={base}
                />
              ))}
            </div>
          )}

          {/* Add to Cart Button (always enabled for made-to-order) */}
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-full mt-2"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
}
