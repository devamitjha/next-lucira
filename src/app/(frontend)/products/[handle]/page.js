"use client";
import { CommonBreadcrumb } from "@/components/product/CommonBreadcrumb";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { BadgePercent, Heart, HeartPlus, Share, ShoppingCart, SlashIcon, Star, StarHalf, Star as StarOutline, MapPin, Package, Video, Store, Home, Shield, Clock, Calendar, Repeat, RefreshCcw, Truck, ShoppingBag  } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import PriceSection from "@/components/product/PriceSection";
const imageList = 
[
  "/images/product/1.jpg",
  "/images/product/2.jpg",
  "/images/product/3.jpg",
  "/images/product/4.jpg",
  "/images/product/5.jpg",
  "/images/product/6.jpg",
]


export default function ProductPage() {
    const params = useParams();
    const handle = params?.handle;
  return (    
       <div className="w-full min-h-screen bg-gray-50 mb-5 pb-10">
          <div className="px-4 py-4 lg:px-8 bg-gray-50">
            <CommonBreadcrumb handle={handle} />
          </div>
          <div className="px-[4.17vw] max-[1600px]:px-[2vw] max-lg:px-0 flex justify-between ">  
            <div className="w-[calc(100%-30vw)] max-[1600px]:w-[calc(100%-500px)] max-lg:w-full overflow-hidden">
              <div className="grid grid-cols-2 gap-3">
                {
                  imageList.map((src, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden group">
                      <Image
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 hover:cursor-zoom-in"
                        width="540"
                        height="540"
                        loading='lazy'
                        src={src}
                        alt="Product Image"/>  
                    </div>
                  ))                
                } 
              </div>
            </div>
            <div className="w-[30vw] max-[1600px]:w-125 max-lg:w-full pl-12 lg:sticky lg:top-6 self-start">
              <div className="sticky top-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="px-3 py-1 border rounded-full text-[12px] flex items-center gap-1">
                    <span>4.9 ⭐</span> <span>|</span> <span>91</span>                    
                  </div>
                </div>
                {/* Price */}
                <div className="mb-2">                  
                  <div className="font-noto flex flex-start items-center gap-4">
                        <div className="font-noto flex flex-start items-center gap-2">
                            <span className="text-purple-950 font-bold text-xl">₹96,637</span> <span className="line-through text-gray-600 text-base">₹1,10,637</span>
                        </div>
                    </div>
                </div>
                {/* Product Title */}
                <h3 className="text-base font-medium mb-5">
                  Marquise Diamond Crossover Micro Pave Engagement Ring
                </h3>
                {/* Variant Selection */}
                <div className="flex justify-between items-center gap-4">
                  <div className="items-center text-[12px] text-gray-700">SIZE & CUSTOMIZATION</div>
                  <div className="relative inline-block text-[12px] text-primary font-semibold cursor-pointer
                    after:absolute after:left-0 after:bottom-0
                    after:h-px after:w-0
                    after:bg-primary
                    after:transition-all after:duration-300 after:ease-out
                    hover:after:w-full">
                    Size Guide
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full h-auto md:h-15 mt-3 mb-6">
                    <div className="border border-primary/50 border-b-0 md:border-b md:border-r-0 rounded-t-md md:rounded-t-none md:rounded-l-md flex items-center justify-between gap-2 ps-4 overflow-hidden h-15 md:h-full w-full md:w-[calc(100%-100px)]">
                        <div className="flex items-center md:items-start flex-col gap-1 text-sm pt-2 pb-3 md:py-2 flex-1">
                            <span>Size</span>
                            <span className="font-semibold text-black/70">12 (51.8 mm)</span>
                        </div>
                        <Separator orientation="vertical" className="bg-primary/50 h-8" />
                        <div className="flex items-center md:items-start justify-center flex-col gap-1 text-sm pt-2 pb-3 md:py-2 flex-1">
                            <span>Metal</span>
                            <span className="font-semibold text-black/70">18 KT_Yellow</span>
                        </div>
                        <Separator orientation="vertical" className="bg-primary/50 h-8" />
                        <div className="flex items-center md:items-start justify-center flex-col gap-1 text-sm pt-2 pb-3 md:py-2 flex-1">
                            <span>Diamond</span>
                            <span className="font-semibold text-black/70">FG-SI</span>
                        </div>
                    </div>
                    <div className="w-full md:w-25 bg-primary h-10 md:h-15 py-2 flex items-center justify-center text-white/90 cursor-pointer rounded-b-md md:rounded-r-md md:rounded-bl-none uppercase text-[12px] font-semibold">customise</div>
                </div> 
                {/* Delivery Section */}
                <div className="flex items-center justify-between border text-black/90 rounded-lg px-3 py-2 gap-3  mb-2">     
                    <div className="flex items-center gap-2">
                        <MapPin size={20} className="text-black/70" />
                    </div>
                    <div className="[&_input]:focus-visible:ring-0 w-full">
                        <Input 
                            type="text" 
                            placeholder="Enter Pincode" 
                            className="border-0 focus:ring-0 focus:outline-0 focus:shadow-none shadow-none p-0 text-sm w-full" 
                        />
                    </div>                     
                    <Button variant="link" className="text-sm text-black/70 cursor-pointer">Locate Me</Button>
                </div>
                {/* Free Delivery */}
                <div className="border rounded-lg p-3 flex items-center gap-2 mb-6">
                    <ShoppingBag  size={20} className="text-primary/70" />
                    <span className="text-sm">Expected Delivery by <span className="font-semibold">September 26, 2025</span></span>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {/* Visit Store */}
                  <div className="animated-border hover:shadow-md transition-shadow duration-300">
                    <div className="glow" />
                    <div className="inner p-4 text-center space-y-2 hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-center">
                        <Store size={20} className="text-primary" />
                      </div>

                      <h3 className="text-sm font-semibold text-gray-700">
                        Visit Our Store
                      </h3>

                      <p className="text-xs text-gray-500">
                        Visit store to explore and try your favourite designs live
                      </p>

                      <Button className="w-full bg-linear-to-r from-purple-300 to-purple-400 text-white py-2 rounded-md hover:opacity-90 transition cursor-pointer">
                        BOOK APPOINTMENT
                      </Button>
                    </div>
                  </div>
                  {/* Try At Home */}
                  <div className="animated-border hover:shadow-md transition-shadow duration-300">
                    <div className="glow" />
                    <div className="inner p-4 text-center space-y-2 hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-center">
                        <Home size={20} className="text-orange-500" />
                      </div>

                      <h3 className="text-sm font-semibold text-gray-700">
                        Try at Home
                      </h3>

                      <p className="text-xs text-gray-500">
                        Try your selected pieces from the comfort of your home
                      </p>

                      <Button className="w-full bg-linear-to-r from-orange-400 to-pink-400 text-white py-2 rounded-md hover:opacity-90 transition cursor-pointer">
                        TRY AT HOME
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ga-2">
                  <h2 className="text-sm tracking-widest text-gray-500 mb-6">
                    ALWAYS WITH YOU
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

                    {[
                      { title: "15 Days", sub: "Return" },
                      { title: "Certified", sub: "Jewelry" },
                      { title: "100% Lifetime", sub: "Exchange" },
                      { title: "Free & Safe", sub: "Shipping" },
                    ].map((item, i) => (
                      <div key={i} className="space-y-3">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-primary">
                          {/* Replace with lucide icons */}
                          ⭐
                        </div>

                        <div className="text-sm font-medium text-gray-800">
                          {item.title}
                        </div>

                        <div className="text-sm text-gray-600 underline underline-offset-4">
                          {item.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>               
                   {/* Engraving Button */}
                <div className="border rounded-xl py-4 px-6 my-6 flex items-center justify-center gap-3 cursor-pointer hover:shadow-sm transition">
                  <span className="text-primary text-lg">✏️</span>
                  <span className="tracking-wide font-medium text-gray-700">
                    ADD FREE ENGRAVING NOW
                  </span>
                </div>

               

                  
                   
                    
                    
                    

                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </p>
                    

                  

                {/* Add to Cart Button */}
                  <div className="flex justify-between gap-4 items-center fixed left-0 bottom-0 z-10 w-full lg:sticky lg:bottom-0 shadow-[rgba(0,0,0,0.16)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] py-4 bg-gray-50">
                        <div className="h-12 bg-linear-to-r from-primary/90 to-primary text-white px-4 py-2 rounded-md hover:bg-primary/90  lg:sticky lg:bottom-0 self-start cursor-pointer flex items-center justify-center gap-2 flex-1">
                            <ShoppingCart size={20} />
                            <span className="text-md uppercase">Add to Cart</span>
                        </div>
                        <div className="wishlist border border-primary-800 rounded-md w-12 h-12 flex items-center justify-center hover:bg-primary/90 hover:text-white cursor-pointer transform transition duration-300">
                            <HeartPlus size={20} />
                        </div>
                        <div className="share border border-primary-800 rounded-md w-12 h-12 flex items-center justify-center hover:bg-primary/90 hover:text-white cursor-pointer transform transition duration-300">
                           <Share size={20} />
                        </div>
                  </div>
</div>

            </div>
          </div>
      </div>
   
  );
}