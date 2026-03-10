"use client";

import { Phone, Calendar, Navigation, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function FindLuciraStore() {
  return (
    <section className="w-full px-4 md:px-16 py-16 bg-[#F9F9F9] mt-15">
      <div className="w-full">
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Find in Lucira Store Near You
          </h2>

          {/* Pincode */}
          <div className="flex justify-center items-center gap-0 mb-4 max-w-xl mx-auto">
            <Input
              placeholder="Enter pin code to check delivery time"
              className="h-12 rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D1D1D1] placeholder:text-gray-400"
            />
            <Button className="h-12 px-10 rounded-l-none bg-black hover:bg-black/90 text-white font-bold tracking-widest">
              CHECK
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
            <Clock size={16} />
            <span>Estimated free dispatch by <b>January 21, 2026</b></span>
          </div>
        </div>

        {/* Store Card */}
        <div className="w-full bg-white border border-[#E5E5E5] rounded-sm overflow-hidden grid md:grid-cols-[45%_55%] min-h-[450px]">
          {/* Map / Image */}
          <div className="relative h-full min-h-[380px]">
            <Image
              src="/images/store.jpg"
              alt="Pune Lucira Store"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 right-6 bg-[#D1EBE3] text-[#006D4E] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium border border-[#A3D9C9]">
              <span className="w-2 h-2 bg-[#006D4E] rounded-full"></span>
              Open Now
            </div>
          </div>

          {/* Store Info */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold italic mb-4">
                    Pune Lucira Store
                  </h3>
                  <p className="text-[#333333] leading-relaxed max-w-md">
                    Shop no. 3,4, Balgandharv Chowk, Sai Square, 5 & 6,
                    Jangali Maharaj Rd, Pune, Maharashtra 411005
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600 ml-1">4.8</span>
                </div>
              </div>

              <div className="bg-[#F3F4F6] px-5 py-3 rounded-full flex items-center gap-3 w-fit">
                <Clock size={18} className="text-gray-700" />
                <span className="text-sm font-medium text-gray-700">
                  Timings: <span className="font-normal text-gray-600 ml-1">Monday - Sunday | 10:30 am - 10:00 pm</span>
                </span>
              </div>

              {/* Product preview */}
              <div className="bg-[#F9FAFB] p-4 rounded-sm border border-gray-100">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-[#E5E5E5] rounded-sm shrink-0"></div>
                  <div className="space-y-2">
                    <p className="font-bold text-sm leading-tight">
                      2 CT Round Cut with Side Diamonds Accent Engagement Ring
                    </p>
                    <div className="bg-white border border-gray-100 rounded-sm p-2 flex flex-col gap-1 w-fit">
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase font-semibold">
                         <Clock size={12} className="text-black" />
                         <span>Size 12 | Yellow Gold</span>
                      </div>
                      <p className="text-[10px] font-bold">
                        Available by 27 January, 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-8">
              <Button variant="outline" className="h-12 px-6 rounded-sm border-black text-xs font-bold tracking-wider hover:bg-black hover:text-white transition-colors">
                <Navigation size={18} className="mr-2" />
                DIRECT ME
              </Button>

              <Button variant="outline" className="h-12 px-6 rounded-sm border-black text-xs font-bold tracking-wider hover:bg-black hover:text-white transition-colors">
                <Phone size={18} className="mr-2" />
                CALL US
              </Button>

              <Button className="h-12 px-6 rounded-sm bg-black text-white text-xs font-bold tracking-wider hover:bg-black/90">
                <Calendar size={18} className="mr-2" />
                BOOK APPOINTMENT
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-between items-center mt-8 px-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-1.5 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
