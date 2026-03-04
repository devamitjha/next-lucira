"use client";
import { CommonBreadcrumb } from "@/components/product/CommonBreadcrumb";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { BadgePercent, Heart, HeartPlus, Share, ShoppingCart, SlashIcon, Star, StarHalf, Star as StarOutline, MapPin, Package, Video, Store, Home, Shield, Clock, Calendar, Repeat, RefreshCcw, Truck, ShoppingBag, Files, Drill   } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import PriceSection from "@/components/product/PriceSection";
import AtcBar from "@/components/AtcBar";
import LuxuryMarquee from "@/components/product/LuxuryMarquee";
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
        <div className="w-[calc(100%-30vw)] max-[1600px]:w-[calc(100%-500px)] max-lg:w-full overflow-hidden lg:sticky lg:top-2 self-start">
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
                    alt="Product Image" />
                </div>
              ))
            }
          </div>
          <div className="mt-8">
            <h2 className="text-sm tracking-widest text-gray-600 mb-4">
              WHAT'S IN THE PACKAGE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">             
              <div className="relative rounded-xl overflow-hidden group">
                <Image
                  src="/images/product/package/Box.jpg"
                  alt="Jewelry Packaging"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden group">
                <Image
                  src="/images/product/package/Selvet.jpg"
                  alt="Lucira Jewelry Branding"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden group">
                <Image
                  src="/images/product/package/Thank-You-Card.jpg"
                  alt="Certificate and Thank You Card"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30vw] max-[1600px]:w-125 max-lg:w-full pl-12 lg:sticky lg:top-2 self-start">
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
            <ShoppingBag size={20} className="text-primary/70" />
            <span className="text-sm">Expected Delivery by <span className="font-semibold">September 26, 2025</span></span>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Visit Store */}
            <div className="animated-border hover:shadow-md transition-shadow duration-300">
              <div className="glow" />
              <div className="inner p-4 text-center space-y-2 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center">
                  <Store size={20} className="text-primary" />
                </div>

                <h3 className="text-sm text-gray-700">
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

                <h3 className="text-sm text-gray-700">
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
          <div className="flex flex-col mb-6">
            <h2 className="text-[12px] tracking-widest text-gray-800 mb-4">
              ALWAYS WITH YOU
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

              {[
                { title: "15 Days", sub: "Return", url:"/images/product/return.svg" },
                { title: "Certified", sub: "Jewelry", url:"/images/product/certified.svg" },
                { title: "100% Lifetime", sub: "Exchange", url:"/images/product/exchange.svg" },
                { title: "Free & Safe", sub: "Shipping", url:"/images/product/shipping.svg" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-primary">
                    <Image src={item.url} alt={item.title} width={40} height={40} />
                  </div>
                  <div className="mt-4">
                    <div className="text-[12px] font-medium text-gray-800 underline underline-offset-4 decoration-.35 decoration-primary/50">
                      {item.title}
                    </div>
                    <div className="text-[12px] text-gray-600 underline underline-offset-4 mt-1 decoration-.35 decoration-primary/50">
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Engraving Button */}
          <div className="border rounded-md py-4 px-6 my-6 flex items-center justify-center gap-2 cursor-pointer hover:shadow-sm transition">
            <span className="text-black/50 text-sm"> <Drill size={16} /></span>
            <span className="text-[12px] tracking-widest text-black">
              ADD FREE ENGRAVING NOW
            </span>
          </div>
          {/* PRODUCT DETAILS */}
          <div className="space-y-3">
            <h3 className="text-sm tracking-wide text-gray-800">
              PRODUCT DETAILS
            </h3>
            {/* SKU */}
            <div className="text-[12px] text-gray-600 flex items-center gap-2">
              <span className="font-medium">SKU:</span>
              <span>LJ-E00157-18RGLGD</span>
              <span className="cursor-pointer text-gray-400 hover:text-primary"><Files size={14}/></span>
            </div>
            {/* Description */}
            <div className="text-[12px] text-gray-600 leading-relaxed">
              Dazzling with timeless elegance, these halo solitaire diamond earrings feature a
              brilliant 3.04ct round-cut solitaire embraced by a delicate pave of smaller...
            </div>
            <div className="text-[12px] text-black/80 underline underline-offset-4 cursor-pointer">
              READ MORE
            </div>
          </div>
          <div className="mt-6 mb-8 space-y-4">
            {/* METAL + DIMENSION GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Metal */}
              <div className="bg-gray-100 rounded-xl p-5 space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <Image src="/images/icons/metal.svg" alt="IGI" width={20} height={20}className="h-5 w-5 object-contain" />
                  <span className="text-primary text-[12px] font-medium">METAL</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[12px] text-gray-800">
                    18KT Rose Gold
                  </div>
                  <div className="text-[12px] text-gray-600">
                    Net Wt: 4.859 g
                  </div>
                </div>
                
              </div>

              {/* Dimension */}
              <div className="bg-gray-100 rounded-xl p-5 space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <Image src="/images/icons/dimension.svg" alt="IGI" width={20} height={20}className="h-5 w-5 object-contain" />
                  <span className="text-primary text-[12px] font-medium">DIMENSION</span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="text-[12px] text-gray-800">
                    Gross Wt: 5.47 g
                  </div>
                </div>
              </div>

            </div>
            {/* DIAMOND FULL WIDTH */}
            <div className="bg-gray-100 rounded-xl p-5 space-y-4 shadow-sm">
              <div className="flex items-center gap-2">
                <Image src="/images/icons/diamond.svg" alt="IGI" width={20} height={20}className="h-5 w-5 object-contain" />
                <span className="text-primary text-[12px] font-medium">DIAMOND</span>
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm text-gray-700">
                <div className="flex flex-col gap-1">
                  <div className="text-[12px] text-gray-800">VVS-VS, EF</div>
                  <div className="text-[12px] text-gray-800">Round</div>
                  <div className="text-[12px] text-gray-800">2 pcs</div>
                  <div className="text-[12px] text-gray-800">2 ct</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[12px] text-gray-800">VVS-VS, EF</div>
                  <div className="text-[12px] text-gray-800">Round</div>
                  <div className="text-[12px] text-gray-800">80 pcs</div>
                  <div className="text-[12px] text-gray-800">1.04 ct</div>
                </div>
              </div>
            </div>
          </div>
          <PriceSection />
           {/* Certification */}
          <div className="mt-6 space-y-8 mb-6">            
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-700">
                Product is certified
              </h3>
              <button className="text-gray-800 text-sm font-medium underline underline-offset-4 hover:opacity-80 transition">
                Check Sample Certificate
              </button>
            </div>           
            <div className="flex justify-center items-center gap-6">
              <Image src="/images/product/IGI.png" alt="IGI" width={48} height={48}className="h-12 w-12 object-contain" />
              <Image src="/images/product/SGL.png" alt="SGL" width={48} height={48} className="h-12 w-12 object-contain" />
              <Image src="/images/product/BIS.png" alt="BIS" width={48} height={48} className="h-12 w-12 object-contain" />
            </div>
            {/* Note Section */}
            <div className="text-center text-[12px] text-gray-600 leading-relaxed px-10 font-medium">
              <span className="font-medium">Note:</span> Our Products Are Handcrafted And
              Personalised For Your Delight, Hence A Weight Variance Is Expected.
            </div>
          </div>         
          <AtcBar/>
        </div>
      </div>
      <LuxuryMarquee/>
    </div>

  );
}