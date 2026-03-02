"use client";
import { CommonBreadcrumb } from "@/components/product/CommonBreadcrumb";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { BadgePercent, Heart, HeartPlus, Share, ShoppingCart, SlashIcon, Star, StarHalf, Star as StarOutline, MapPin, Package, Video, Store, Home, Shield, Clock, Calendar, Repeat, RefreshCcw, Truck, ShoppingBag  } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
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
    <main>
       <div className="w-full min-h-screen bg-gray-50 mb-5 pb-10">
          <div className="px-4 py-4 lg:px-8 bg-gray-50">
            <CommonBreadcrumb handle={handle} />
          </div>
          <div className="px-[4.17vw] max-[1600px]:px-[2vw] max-lg:px-0 flex justify-between">  
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
            <div className="w-[30vw] max-[1600px]:w-125 max-lg:w-full pl-12 lg:sticky lg:top-0 self-start">
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
                <h3 className="text-base font-medium mb-4">
                  Marquise Diamond Crossover Micro Pave Engagement Ring
                </h3>

                {/* Variant Selection */}
                  <div className="flex flex-col md:flex-row w-full h-auto md:h-15 mt-4 mb-6">
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

                {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">  
                  <div className="border rounded-lg p-4 text-center space-y-2 hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-center">
                          <Store size={20} className="text-purple-600" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-700">Visit Our Store</h3>
                      <p className="text-xs text-gray-500">Visit store to explore and try your favourite designs live</p>
                      <Button className="w-full bg-linear-to-r from-purple-300 to-purple-400 text-white py-2 rounded-md hover:opacity-90 transition cursor-pointer">
                      BOOK APPOINTMENT
                      </Button>
                  </div>
                  <div className="border rounded-lg p-4 text-center space-y-2 hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-center">
                      <Home size={20} className="text-orange-500" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-700">Try at Home</h3>
                      <p className="text-xs text-gray-500">Try your selected pieces from the comfort of your home</p>
                      <Button className="w-full bg-linear-to-r from-orange-300 to-pink-400 text-white py-2 rounded-md hover:opacity-90 transition cursor-pointer">
                      Try at Home
                      </Button>
                  </div>
                </div> */}
                { /*
                <div className="mt-6 space-y-5">
                  <div className="flex bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="w-47">
                      <img
                        src="/images/product/store.png"
                        alt="Visit Store"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <Store size={20} className="text-primary" />
                        <h4 className="text-sm font-medium">Visit Our Store</h4>
                      </div>
                      <p className="text-xs text-muted-foreground my-2">
                        Visit store to explore and try your favourite designs live
                      </p>
                      <button className="w-full bg-linear-to-r from-primary to-primary/80 
                        text-primary-foreground 
                        px-5 py-2 rounded-lg text-xs font-medium
                        hover:opacity-90 transition">
                        BOOK APPOINTMENT
                      </button>
                    </div>
                  </div>

                  <div className="flex bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="w-47">
                      <img
                        src="/images/product/try.jpg"
                        alt="Try at Home"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <Home size={20} className="text-pink-500" />
                        <h4 className="text-sm font-medium">Try at Home</h4>
                      </div>
                      <p className="text-xs text-muted-foreground my-2">
                        Try your selected pieces from the comfort of your home
                      </p>
                      <button className="w-full bg-pink-500 text-white 
                        px-5 py-2 rounded-lg text-xs font-medium
                        hover:bg-pink-600 transition">
                        TRY AT HOME
                      </button>
                    </div>
                  </div>
                </div>
                */}

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
    </main>
   
  );
}