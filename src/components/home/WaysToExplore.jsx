"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const WAYS = [
  {
    title: "Virtual Shop",
    desc: "Book a video call to explore our jewelry with our experts from the comfort of your home.",
    buttonText: "SCHEDULE VIDEO CALL",
    image: "/images/product/1.jpg",
  },
  {
    title: "Try At Home",
    desc: "Select up to 5 jewelry pieces and try them at home before you decide.",
    buttonText: "BOOK HOME TRIAL",
    image: "/images/product/2.jpg",
  },
  {
    title: "Visit Our Store",
    desc: "Experience our jewelry in person. Book an appointment for a personalized showroom visit.",
    buttonText: "BOOK APPOINTMENT",
    image: "/images/store.jpg",
  }
];

export default function WaysToExplore() {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-480 mx-auto px-6 md:px-17 text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-medium mb-3">More Ways To Explore</h2>
         <p className="text-gray-500">Experience Lucira your way, online or at our showrooms.</p>
      </div>

      <div className="max-w-480 mx-auto px-6 md:px-17">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WAYS.map((way, index) => (
            <div key={index} className="flex flex-col h-full bg-[#FAFAFA] rounded-md overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={way.image} 
                  alt={way.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <h3 className="text-2xl font-medium mb-4">{way.title}</h3>
                <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                  {way.desc}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="h-12 px-6 rounded-sm border-black text-black text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all uppercase">
                    {way.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
