"use client";

export default function ProductCardSkeleton() {
  return (
    <div className="group cursor-pointer animate-pulse">
      <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden mb-4 h-48" />

      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-8 bg-gray-200 rounded w-full" />
      </div>
    </div>
  );
}
