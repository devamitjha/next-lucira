"use client";

import { Star, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import Image from "next/image";
import { Separator } from "@/components/ui/separator"

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
    <section className="w-full py-18 bg-gray-50 mt-15">
      <div className="max-w-480 mx-auto px-17 min-[1440px]:px-17">
        
        {/* Heading */}
        <h2 className="text-28px font-bold mb-8 text-center">
          Customer Reviews
        </h2>

        {/* Review Summary Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-6">
          
          {/* Average Rating */}
          <div className="text-center flex-1">
            <p className="text-5xl font-semibold mb-4">4.9</p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-black text-black" />
              ))}
            </div>
            <p className="text-base">123 reviews</p>
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
            <p className="text-4xl font-semibold mb-3">97%</p>
            <p className="text-base leading-snug">
              Would recommend<br />this product
            </p>
          </div>
        </div>

        {/* Write a Review Button */}
        <div className="flex justify-center mb-6">
          <Button className="bg-black text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all rounded-sm">
            Write a Review
          </Button>
        </div>       

        {/* Thumbnail Slider */}
        <div className="mb-6 -mx-4 md:mx-0">
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

         <Separator />

        {/* Filter Bar */}
        <div className="flex items-center justify-between border-y border-gray-100 py-6 px-2">
          <button className="flex items-center gap-2 text-base font-bold">
            Rating: <span className="text-black font-normal">All</span>
            <ChevronDown size={16} />
          </button>
          
          <span className="text-base text-black">54 reviews</span>
          
          <button className="flex items-center gap-2 text-base font-bold">
            Sort by: <span className="text-black font-normal">Featured</span>
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
    <div className="flex items-center gap-4 text-base">
      <span className="w-14">{label}</span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-500" 
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-10 text-sm text-right">{value}%</span>
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
              <div className="flex items-center gap-1 text-[#828282] px-2 py-0.5 rounded-full">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clip-rule="evenodd" d="M5.6943 0.900205C5.51166 1.05585 5.42033 1.13369 5.3228 1.19906C5.09922 1.34891 4.84813 1.45291 4.58408 1.50504C4.46888 1.52779 4.34927 1.53733 4.11006 1.55642C3.50903 1.60439 3.2085 1.62836 2.95778 1.71692C2.37788 1.92175 1.92175 2.37788 1.71692 2.95778C1.62836 3.2085 1.60439 3.50903 1.55642 4.11006C1.53733 4.34927 1.52779 4.46888 1.50504 4.58408C1.45291 4.84813 1.34891 5.09922 1.19906 5.3228C1.13369 5.42033 1.05586 5.51165 0.900205 5.6943C0.509125 6.15323 0.313577 6.38265 0.198917 6.62258C-0.0663056 7.1775 -0.0663056 7.8225 0.198917 8.37743C0.313584 8.61735 0.509125 8.84678 0.900205 9.3057C1.05584 9.48833 1.13369 9.57968 1.19906 9.67718C1.34891 9.90075 1.45291 10.1519 1.50504 10.4159C1.52779 10.5311 1.53733 10.6508 1.55642 10.8899C1.60439 11.491 1.62836 11.7915 1.71692 12.0422C1.92175 12.6221 2.37788 13.0783 2.95778 13.2831C3.2085 13.3716 3.50903 13.3956 4.11006 13.4436C4.34927 13.4627 4.46888 13.4723 4.58408 13.495C4.84813 13.5471 5.09922 13.6511 5.3228 13.801C5.42033 13.8663 5.51165 13.9442 5.6943 14.0998C6.15323 14.4909 6.38265 14.6864 6.62258 14.8011C7.1775 15.0663 7.8225 15.0663 8.37743 14.8011C8.61735 14.6864 8.84678 14.4909 9.3057 14.0998C9.48833 13.9442 9.57968 13.8663 9.67718 13.801C9.90075 13.6511 10.1519 13.5471 10.4159 13.495C10.5311 13.4723 10.6508 13.4627 10.8899 13.4436C11.491 13.3956 11.7915 13.3716 12.0422 13.2831C12.6221 13.0783 13.0783 12.6221 13.2831 12.0422C13.3716 11.7915 13.3956 11.491 13.4436 10.8899C13.4627 10.6508 13.4723 10.5311 13.495 10.4159C13.5471 10.1519 13.6511 9.90075 13.801 9.67718C13.8663 9.57968 13.9442 9.48833 14.0998 9.3057C14.4909 8.84678 14.6864 8.61735 14.8011 8.37743C15.0663 7.8225 15.0663 7.1775 14.8011 6.62258C14.6864 6.38265 14.4909 6.15323 14.0998 5.6943C13.9442 5.51165 13.8663 5.42033 13.801 5.3228C13.6511 5.09922 13.5471 4.84813 13.495 4.58408C13.4723 4.46888 13.4627 4.34927 13.4436 4.11006C13.3956 3.50903 13.3716 3.2085 13.2831 2.95778C13.0783 2.37788 12.6221 1.92175 12.0422 1.71692C11.7915 1.62836 11.491 1.60439 10.8899 1.55642C10.6508 1.53733 10.5311 1.52779 10.4159 1.50504C10.1519 1.45291 9.90075 1.34891 9.67718 1.19906C9.57968 1.13369 9.48833 1.05586 9.3057 0.900205C8.84678 0.509125 8.61735 0.313584 8.37743 0.198917C7.8225 -0.0663056 7.1775 -0.0663056 6.62258 0.198917C6.38265 0.313577 6.15323 0.509125 5.6943 0.900205ZM10.7801 5.89736C11.0185 5.65898 11.0185 5.2725 10.7801 5.03412C10.5418 4.79575 10.1552 4.79575 9.91688 5.03412L6.27923 8.6718L5.0831 7.4757C4.84472 7.23735 4.45824 7.23735 4.21987 7.4757C3.9815 7.71405 3.9815 8.10053 4.21987 8.33895L5.84759 9.96668C6.08595 10.205 6.47243 10.205 6.71085 9.96668L10.7801 5.89736Z" fill="#828282"/>
                </svg>
                <span className="text-sm font-bold tracking-wider">Verified</span>
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
          <span className="text-base ml-1">(4.9)</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <h4 className="text-lg font-semibold text-black">{title}</h4>
          <span className="text-sm  text-gray-400">{date}</span>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
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
