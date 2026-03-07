"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import ProductReview from "./ProductReview";

export default function ProductReviewCard() {
  return (
    <div className="px-4 py-10 overflow-hidden">
        <h2 className="text-2xl text-center">Customer Reviews</h2>    
        <div className="flex justify-center gap-8 mt-8">
            <div className="flex flex-col justify-center w-120">
                <div className="flex flex-col items-end">
                    <p className="text-gray-500 text-sm">Overall Rating</p>
                    <h2 className="text-7xl font-bold mt-1">4.0</h2>        
                    <div className="flex gap-1 mt-2">
                    {[1,2,3,4].map((i)=>(
                        <Star key={i} className="text-orange-500 fill-orange-500" size={22}/>
                    ))}
                    <Star className="text-gray-300" size={22}/>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">based on 479 reviews</p>
                </div>
                {/* Rating Bars */}
                <div className="mt-6 space-y-3 text-sm">

                <RatingRow label="5" percent="80%" count="400" color="bg-green-500"/>
                <RatingRow label="4" percent="60%" count="300" color="bg-lime-500"/>
                <RatingRow label="3" percent="35%" count="175" color="bg-yellow-400"/>
                <RatingRow label="2" percent="20%" count="100" color="bg-orange-400"/>
                <RatingRow label="1" percent="10%" count="50" color="bg-red-500"/>

                </div>

            </div>
            <ProductReview/>
        </div>
    </div>
  );
}

function RatingRow({ label, percent, color, count }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-600 flex items-center gap-2 font-bold">{label} <Star className="text-orange-500 fill-orange-500" size={16}/></span>
      <div className="flex-1 h-2 bg-gray-200 rounded">
        <div
          className={`${color} h-2 rounded`}
          style={{ width: percent }}
        />
      </div>
      <span className="text-primary font-bold">{count}</span>
    </div>
  );
}