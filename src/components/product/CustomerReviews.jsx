"use client";

import { Star, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import Image from "next/image";

export default function CustomerReviews() {
  const reviewImages = [
    "/images/product/review/1.jpg",
    "/images/product/review/2.jpg",
    "/images/product/review/3.jpg",
    "/images/product/review/4.jpg",
    "/images/product/review/5.jpg",
    "/images/product/review/6.jpg",
    "/images/product/review/1.jpg",
    "/images/product/review/2.jpg",
    "/images/product/review/3.jpg",
    "/images/product/review/4.jpg",
    "/images/product/review/5.jpg",
  ];

  return (
    <section className="w-full py-20 bg-gray-50 mt-15">
      <div className="max-w-360 mx-auto px-17 min-[1440px]:px-0">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Reviews
        </h2>

        {/* Review Summary Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12 py-8">
          
          {/* Average Rating */}
          <div className="text-center flex-1">
            <p className="text-6xl font-bold mb-4">4.9</p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-black text-black" />
              ))}
            </div>
            <p className="text-gray-600 font-medium">123 reviews</p>
          </div>

          {/* Progress Bars */}
          <div className="flex-[1.5] w-full max-w-md space-y-3">
            <RatingProgress label="5 Stars" value={85} />
            <RatingProgress label="4 Stars" value={15} />
            <RatingProgress label="3 Stars" value={0} />
            <RatingProgress label="2 Stars" value={0} />
            <RatingProgress label="1 Star" value={0} />
          </div>

          {/* Recommendation Percentage */}
          <div className="text-center flex-1">
            <p className="text-5xl font-bold mb-2">97%</p>
            <p className="text-gray-600 leading-tight font-medium">
              Would recommend<br />this product
            </p>
          </div>
        </div>

        {/* Write a Review Button */}
        <div className="flex justify-center mb-16">
          <Button className="bg-black text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all rounded-sm">
            Write a Review
          </Button>
        </div>

        {/* Thumbnail Slider */}
        <div className="mb-16 -mx-4 md:mx-0">
          <Swiper
            modules={[FreeMode, Navigation]}
            spaceBetween={12}
            slidesPerView={3.5}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 5.5 },
              1024: { slidesPerView: 8.5 },
              1280: { slidesPerView: 10.5 },
            }}
            className="px-4 md:px-0"
          >
            {reviewImages.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden relative group cursor-pointer">
                  <Image 
                    src={src} 
                    alt={`Review ${i}`} 
                    fill 
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  {/* Fallback gray box if image fails */}
                  <div className="absolute inset-0 bg-gray-200 -z-10" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between border-y border-gray-100 py-6 mb-10 px-2">
          <button className="flex items-center gap-2 text-sm font-bold">
            Rating: <span className="font-medium text-gray-500">All</span>
            <ChevronDown size={16} />
          </button>
          
          <span className="text-sm font-bold text-gray-800">54 reviews</span>
          
          <button className="flex items-center gap-2 text-sm font-bold">
            Sort by: <span className="font-medium text-gray-500">Featured</span>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ReviewCard 
            name="Aesha S V"
            initials="A"
            title="Absolutely stunning in person"
            date="15 days ago"
            text="The round cut sparkles beautifully and looks even better than the photos. It feels elegant, timeless, and incredibly well made."
            hasImage={true}
          />
          <ReviewCard 
            name="Aaryan N"
            initials="A"
            title="She Said Yes Instantly!"
            date="15 days ago"
            text="I bought this ring for my fiancée and she absolutely loves it. She hasn't stopped admiring the sparkle and design."
            hasImage={true}
          />
          <ReviewCard 
            name="Kirti N"
            initials="K"
            title="Beyond my expectations"
            date="20 days ago"
            text="I was hesitant at first, but the quality of this lab grown diamond is indistinguishable from natural. Truly beautiful."
            hasImage={false}
          />
          <ReviewCard 
            name="Shivani V"
            initials="S"
            title="Perfect anniversary gift"
            date="1 month ago"
            text="My husband got me this for our 5th anniversary. It's so delicate yet impactful. I get compliments everywhere I go."
            hasImage={false}
          />
          <ReviewCard 
            name="Aesha S V"
            initials="A"
            title="Absolutely stunning in person"
            date="15 days ago"
            text="The round cut sparkles beautifully and looks even better than the photos. It feels elegant, timeless, and incredibly well made."
            hasImage={true}
          />
          <ReviewCard 
            name="Aaryan N"
            initials="A"
            title="She Said Yes Instantly!"
            date="15 days ago"
            text="I bought this ring for my fiancée and she absolutely loves it. She hasn't stopped admiring the sparkle and design."
            hasImage={true}
          />
          <ReviewCard 
            name="Kirti N"
            initials="K"
            title="Beyond my expectations"
            date="20 days ago"
            text="I was hesitant at first, but the quality of this lab grown diamond is indistinguishable from natural. Truly beautiful."
            hasImage={false}
          />
          <ReviewCard 
            name="Shivani V"
            initials="S"
            title="Perfect anniversary gift"
            date="1 month ago"
            text="My husband got me this for our 5th anniversary. It's so delicate yet impactful. I get compliments everywhere I go."
            hasImage={false}
          />
        </div>

        {/* Read More */}
        <div className="flex justify-center mt-16">
          <Button variant="outline" className="border-black text-black px-10 py-6 font-bold hover:bg-black hover:text-white transition-all rounded-sm">
            READ MORE REVIEWS
          </Button>
        </div>
      </div>
    </section>
  );
}

function RatingProgress({ label, value }) {
  return (
    <div className="flex items-center gap-4 text-sm font-medium">
      <span className="w-14 text-gray-700">{label}</span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-500" 
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-10 text-right text-gray-500">{value}%</span>
    </div>
  );
}

function ReviewCard({ name, initials, title, date, text, hasImage }) {
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col gap-5 border border-transparent hover:border-gray-200 transition-all">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-black">{name}</span>
              <div className="flex items-center gap-1 text-[#108548] bg-[#F0F9F4] px-2 py-0.5 rounded-full">
                <CheckCircle size={12} fill="currentColor" className="text-white" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-black text-black" />
            ))}
          </div>
          <span className="text-xs font-bold text-gray-600 ml-1">(4.9)</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <h4 className="text-lg font-bold text-black">{title}</h4>
          <span className="text-xs font-medium text-gray-400">{date}</span>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm font-medium">
          {text}
        </p>
      </div>

      {hasImage && (
        <div className="w-24 h-24 bg-gray-200 rounded-sm overflow-hidden relative">
          <Image 
            src="/images/product/review/1.jpg" 
            alt="Review attachment" 
            fill 
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
