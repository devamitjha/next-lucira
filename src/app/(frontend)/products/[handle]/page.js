"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Play, Info, Heart, Truck, RotateCcw, BadgeCheck, PlayCircle, Video, Store, CheckCircle,  Diamond, Ruler, ShieldCheck, ChevronRight, Share2, MessageCircle  } from "lucide-react";
import PriceSavingsDetails from "@/components/product/PriceSavingsDetails";
import ProductAccordion from "@/components/product/ProductAccordion";
import LuxuryMarquee from "@/components/product/LuxuryMarquee";
import ProductStory from "@/components/product/ProductStory";
import FeaturedIn from "@/components/product/FeaturedIn";
import OurProcess from "@/components/product/OurProcess";
import CategorySlider from "@/components/product/CategorySlider";
import CustomerReviews from "@/components/product/CustomerReviews";
import FAQSection from "@/components/product/FAQSection";
import DiamondComparison from "@/components/product/DiamondComparison";
import { FindLuciraStore } from "@/components/product/FindLuciraStore";
import { JoinLuciraCommunity } from "@/components/product/JoinLuciraCommunity";
import { ProductSlider } from "@/components/product/ProductSlider";
import ExploreOtherRings from "@/components/product/ExploreOtherRings";
import WearThisWith from "@/components/product/WearThisWith";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ProductPage() {
  const [engraving, setEngraving] = useState("");
  const [activePromoSlide, setActivePromoSlide] = useState(1);
  return (
    <div className="w-full">
      <div className="max-w-480 mx-auto px-17 min-[1440px]:px-17">
        {/* Breadcrumb */}
        <Breadcrumb className="py-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-[13px] font-medium text-black">Engagement Rings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight size={14}/></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-[13px] font-medium text-black">Round</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight size={14}/></BreadcrumbSeparator>
            <BreadcrumbItem className="text-[13px] font-medium text-gray-400">
              Round Cut with Side Diamonds Accent Engagement Ring
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_530px] gap-10 items-start">
          {/* Left: Product Gallery */}
          <div className="grid grid-cols-2 gap-4 sticky top-5">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-[#F7F7F7]">
               <Image src="/images/product/1.jpg" alt="Product" fill className="object-cover" />
               <div className="absolute top-4 left-4 flex flex-col gap-2">
                 <span className="bg-white/95 px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.05em] shadow-sm">Best Seller</span>
                 <span className="bg-white/95 px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.05em] shadow-sm">Fast Shipping</span>
               </div>
               <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-[12px] font-semibold flex items-center gap-2 shadow-sm border border-gray-100">
                 <Play size={14} className="fill-black" /> Virtual try on
               </button>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-[#F7F7F7]">
               <Image src="/images/product/2.jpg" alt="Product" fill className="object-cover" />
               <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-[12px] font-semibold flex items-center gap-2 shadow-sm border border-gray-100">
                 <div className="w-5 h-5 rounded-full border border-gray-200 overflow-hidden relative">
                    <Image src="/images/product/6.jpg" alt="similar" fill className="object-cover" />
                 </div>
                 Similar items
               </button>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden bg-[#F7F7F7] relative">
               <Image src="/images/product/3.jpg" alt="Product" fill className="object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden bg-[#F7F7F7] relative">
               <Image src="/images/product/4.jpg" alt="Product" fill className="object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden bg-[#F7F7F7] relative">
               <Image src="/images/product/5.jpg" alt="Product" fill className="object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden bg-[#F7F7F7] relative">
               <Image src="/images/product/6.jpg" alt="Product" fill className="object-cover" />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-[28px] font-bold leading-[1.2] tracking-tight">
                2 CT Round Cut with Side Diamonds Accent Engagement Ring
              </h1>
              <div className="flex items-center gap-1.5 leading-none overflow-hidden justify-start">
                <span className="text-[14px] text-gray-500">VVS-VS Clarity · EF Color · 14K yellow gold · 2.6g · 4 round + 4 marquise accents · Lab-Grown diamond 
                  <button className="inline-flex items-center">
                    <Info size={14} className="text-gray-400 ml-0.5" />
                  </button>
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={16} fill="black" className="text-black" />
                  ))}
                </div>
                <span className="text-sm font-bold">4.9</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <span className="text-[26px] font-bold">₹99,970</span>
                <span className="text-[18px] text-gray-400 line-through font-medium">₹126,008</span>
                <span className="bg-[#F2F2F2] text-black text-[12px] font-bold px-3 py-1 rounded-full">
                  21% OFF
                </span>
                <button className="text-sm font-semibold underline underline-offset-4 ml-auto decoration-gray-300">
                  See Savings Breakup
                </button>
              </div>
              <p className="text-[12px] text-gray-400 font-medium tracking-tight">Inclusive of all taxes.</p>
            </div>

            {/* Savings Banners Slider */}
            <div className="w-full">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={8}
                slidesPerView={1.5}
                autoplay={false}
                loop={true}
                className="w-full"
              >
                <SwiperSlide>
                  <div className="border border-dashed border-gray-300 rounded-lg px-3 py-3 flex items-center gap-2 bg-white h-full">
                    <span className="text-base flex-shrink-0">💎</span>
                    <p className="text-[11px] font-bold text-black whitespace-nowrap">
                      You're saving flat <span className="font-extrabold text-black">25% OFF</span> on diamond prices.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border border-dashed border-gray-300 rounded-lg px-3 py-3 flex items-center gap-2 bg-white h-full">
                    <span className="text-base flex-shrink-0">🪙</span>
                    <p className="text-[11px] font-bold text-black whitespace-nowrap">
                      Save more with <span className="font-extrabold text-black">Lucira coins</span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border border-dashed border-gray-300 rounded-lg px-3 py-3 flex items-center gap-2 bg-white h-full">
                    <span className="text-base flex-shrink-0">✨</span>
                    <p className="text-[11px] font-bold text-black whitespace-nowrap">
                      Free <span className="font-extrabold text-black">Gift</span> included
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Gold Selection */}
            <div className="space-y-4 pt-4">
              <div className="text-sm font-bold">
                Select Gold Color & Karat: <span className="text-gray-500 font-medium ml-1 uppercase">14KT Yellow Gold</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <GoldOption label="14KT White Gold" color="bg-[#E5E5E5]" />
                <GoldOption label="14KT Yellow Gold" active color="bg-[#EBC15C]"/>
                <GoldOption label="14KT Rose Gold" color="bg-[#F6C7C7]"/>
                <GoldOption label="18KT White Gold" color="bg-[#E5E5E5]"/>
                <GoldOption label="18KT Yellow Gold" color="bg-[#EBC15C]"/>
                <GoldOption label="18KT Rose Gold" color="bg-[#F6C7C7]"/>
              </div>
            </div>

            {/* Ring Size */}
            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold">Select Ring Size: <span className="font-medium ml-1">12 IND</span></span>
                <button className="text-[13px] font-bold underline underline-offset-4 decoration-gray-300">Size Guide</button>
              </div>
              
              <div className="bg-[#F8F9FA] rounded-lg flex items-center gap-4 px-4 py-2.5 border border-gray-100">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <Play size={16} fill="black" />
                </div>
                <span className="text-[13px] font-bold text-gray-700">Watch this quick video to measure your ring right.</span>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {[5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(size => (
                  <button
                    key={size}
                    className={`relative border rounded-md h-12 flex items-center justify-center text-sm transition-all ${
                      size === 12
                        ? "border-black bg-white ring-1 ring-black font-bold"
                        : "border-gray-200 hover:border-black font-medium"
                    }`}
                  >
                    {size.toString().padStart(2,"0")}
                    <span className="absolute top-1 left-1 w-1.5 h-1.5 bg-[#2DB36F] rounded-full"></span>
                  </button>
                ))}
              </div>
              <p className="text-[13px] text-gray-500 font-medium">Didn't get the size right? We'll exchange it.</p>
              
              <div className="bg-[#ECF7F2] border border-[#B3E1CD] text-[#1E7D4E] text-[13px] rounded-lg px-4 py-3 flex items-center gap-3 font-bold">
                <span className="w-2.5 h-2.5 bg-[#2DB36F] rounded-full"></span>
                This combination is <span className="font-bold">in-stock & ready to ship in 24 hrs</span>
              </div>
            </div>

            {/* Engraving */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="font-bold text-[15px]">Complimentary Engraving (optional)</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                Personalise your ring with a custom engraving. Your chosen message will
                be carefully laser-engraved on the inner band.
              </p>
              <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                  <Input
                    value={engraving}
                    maxLength={20}
                    onChange={(e)=>setEngraving(e.target.value)}
                    placeholder="Enter name, date, initials"
                    className="h-12 bg-white border-gray-200 pr-16 text-sm font-medium"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-gray-400 hover:text-black transition-colors">
                    DONE
                  </button>
                </div>                
              </div>
              <div className="text-right text-[11px] font-bold text-gray-400">
                {engraving.length}/20
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-2">
              <Button className="flex-1 h-14 text-[16px] font-bold bg-black text-white hover:bg-gray-800 rounded-md">
                ADD TO CART
              </Button>
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-md border-gray-200 hover:bg-gray-50">
                <Heart size={24} className="text-black" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 font-bold text-sm border-gray-200 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
                 <Image src="/images/icons/engrave.svg" alt="whatsapp" width={18} height={18} />
                 Whatsapp Us
              </Button>
              <Button variant="outline" className="h-12 font-bold text-sm border-gray-200 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
                <Video size={18} className="text-black" />
                Shop Live
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-1 text-[13px] font-bold text-black">
              <Feature icon={<Image src="/images/product/shipping.svg" alt="" width={20} height={20} />} text="Free and secure shipping" />
              <Feature icon={<Image src="/images/product/return.svg" alt="" width={20} height={20} />} text="15-day free returns" />
              <Feature icon={<Image src="/images/product/exchange.svg" alt="" width={20} height={20} />} text="Lifetime exchange and 100% value guarantee" />
              <Feature icon={<BadgeCheck size={20} className="text-gray-400" />} text="IGI and Hallmark certified" />
            </div>

            {/* Lucira Coins */}
            <div className="flex gap-4 items-center bg-[#FDF8EE] border border-[#FBEAC8] rounded-xl p-4">
              <div className="bg-[#FEF1D4] w-12 h-12 rounded-lg flex items-center justify-center">
                 <Star size={24} className="text-[#D4A017] fill-[#D4A017]" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[13px] font-bold leading-tight">
                  Earn 5138 Lucira Coins worth ₹500 with this order
                </p>
                <p className="text-[11px] font-bold text-gray-500">
                  10 Lucira Coins = ₹1
                </p>
              </div>
            </div>

            {/* Pincode & Delivery */}
            <div className="space-y-5 pt-2">
              <div className="flex gap-3">
                <Input
                  placeholder="Enter Pincode"
                  defaultValue="411005"
                  className="h-12 bg-white border-gray-200 rounded-md text-sm font-medium"
                />
                <Button className="h-12 px-10 font-bold bg-black text-white hover:bg-gray-800 rounded-md">
                  CHECK
                </Button>
              </div>
              <div className="text-[13px] text-gray-500 flex items-center gap-2 font-medium">
                <Info size={16} className="text-gray-300" />
                Estimated free dispatch by <span className="font-bold text-black">January 21, 2026</span>
              </div>
            </div>

            {/* Nearest Store */}
            <div className="border border-gray-200 rounded-xl p-6 space-y-4 bg-white">
              <div className="flex items-center gap-3">
                <Store size={20} className="text-gray-400" />
                <span className="text-sm font-bold">Nearest Store - <span className="italic font-normal text-gray-600">Pune Lucira Store (3Km)</span></span>
              </div>
              <div className="flex items-center gap-2 bg-[#E6F5EF] text-[#1E7D4E] px-3 py-1 rounded-full w-fit">
                <CheckCircle size={14} fill="currentColor" className="text-[#2DB36F]" />
                <span className="text-[11px] font-bold uppercase tracking-tight">Design Available</span>
              </div>
              <p className="text-[13px] text-gray-500 font-bold">
                Also available in <button className="text-black underline underline-offset-2 decoration-gray-300">2 other stores</button>
              </p>
              <Button className="w-full h-12 font-bold bg-black text-white hover:bg-gray-800 rounded-md">
                FIND IN STORE
              </Button>
            </div>

            {/* Promo Cards Slider */}
            <div className="space-y-6 pt-4 overflow-hidden">
              <Swiper
                spaceBetween={12}
                slidesPerView={1.2}
                onSlideChange={(swiper) => setActivePromoSlide(swiper.activeIndex + 1)}
                className="w-full !overflow-visible"
              >
                {[1, 2, 3].map((i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-[#F9F9F9] border border-gray-100 rounded-xl p-5 flex items-center gap-5 h-full">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm flex-shrink-0">
                        <Image src="/images/story-ring.jpg" alt="gold coin" fill className="object-cover" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[15px] font-bold italic leading-tight">Complimentary Gold Coin</p>
                        <p className="text-[12px] text-gray-500 leading-relaxed font-bold">
                          Receive a free gold coin with this ring, making your order even more special.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Slider Indicator */}
              <div className="flex items-center gap-5">
                <div className="flex-1 h-[3px] bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black rounded-full transition-all duration-300"
                    style={{ width: `${(activePromoSlide / 3) * 100}%` }}
                  ></div>
                </div>
                <span className="text-[12px] font-bold tracking-tight text-black">{activePromoSlide}/3</span>
              </div>

              {/* Explore Section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-[15px] font-bold">More Ways To Explore:</h3>
                <ExploreCard
                  title="Visit Our Store"
                  description="Explore and try your favorite designs in person, with expert guidance from our in-store team."
                  action="BOOK APPOINTMENT"
                  img="/images/store.jpg"
                />
                <ExploreCard
                  title="Try At Home"
                  description="Try your selected pieces from the comfort of your home. Available in all major cities"
                  action="BOOK HOME TRIAL"
                  img="/images/subscribe-2.jpg"
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="pt-10 space-y-5">
              <h2 className="text-[20px] font-bold tracking-tight">Product Details:</h2>
              <div className="bg-[#FAFAFA] border border-gray-100 rounded-xl p-8 space-y-10">
                {/* Metal & Dimensions */}
                <div className="flex gap-0 relative">
                  {/* Metal */}
                  <div className="flex-1 pr-8">
                    <div className="flex items-center gap-2 font-bold text-[15px] mb-4 uppercase tracking-wide">
                      <Image src="/images/icons/metal.svg" alt="" width={18} height={18} />
                      Metal
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-[110px] h-[90px] bg-white rounded-lg border border-gray-100 flex items-center justify-center p-2 shadow-sm">
                        <Image src="/images/product/try.jpg" alt="Metal" width={80} height={80} className="object-contain" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-[15px] font-bold text-gray-900 leading-none">14KT Yellow Gold</p>
                        <p className="text-[15px] font-bold text-gray-900 leading-none">Net Wt: 2.079 g</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] bg-gray-200 self-stretch"></div>

                  {/* Dimensions */}
                  <div className="flex-1 pl-12">
                    <div className="flex items-center gap-2 font-bold text-[15px] mb-4 uppercase tracking-wide">
                      <Image src="/images/icons/dimension.svg" alt="" width={18} height={18} />
                      Dimensions
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-[110px] h-[90px] bg-white rounded-lg border border-gray-100 flex items-center justify-center p-2 shadow-sm">
                        <Image src="/images/product/6.jpg" alt="Dimensions" width={80} height={80} className="object-contain" />
                      </div>
                      <div className="space-y-3">
                        <p className="text-[15px] text-gray-900 font-bold leading-none">Height: <span className="font-medium ml-2">7.1 mm</span></p>
                        <p className="text-[15px] text-gray-900 font-bold leading-none">Width: <span className="font-medium ml-2">8 mm</span></p>
                        <p className="text-[15px] text-gray-900 font-bold leading-none">Gross Wt: <span className="font-medium ml-2">2.58 g</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-gray-200 w-full"></div>

                {/* Diamond Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 font-bold text-[15px] uppercase tracking-wide">
                    <Image src="/images/icons/diamond.svg" alt="" width={18} height={18} />
                    Diamond
                  </div>
                  
                  <div className="bg-[#EDEDED] rounded-md px-4 py-2 flex items-center gap-2.5 w-fit">
                    <div className="w-4 h-4 rounded-full bg-gray-500 flex items-center justify-center text-[10px] text-white font-bold italic">i</div>
                    <span className="text-[14px] font-bold text-gray-700">Clarity & Color: VVS-VS, EF</span>
                  </div>

                  <div className="grid grid-cols-3 gap-0 pt-4">
                    <DiamondDetail 
                      img="/images/product/1.jpg"
                      shape="Round"
                      pcs="1"
                      carat="2.00ct"
                    />
                    <DiamondDetail 
                      img="/images/product/2.jpg"
                      shape="Round"
                      pcs="4"
                      carat="0.048ct"
                      showLeftBorder
                    />
                    <DiamondDetail 
                      img="/images/product/3.jpg"
                      shape="Marquise"
                      pcs="4"
                      carat="0.48ct"
                      showLeftBorder
                    />
                  </div>
                </div>

                <p className="pt-4 text-[14px] text-gray-900 font-bold leading-relaxed">
                  Our products are handcrafted and personalised for your delight, hence a weight variance is expected.
                </p>
              </div>
            </div>

            <PriceSavingsDetails/>

            {/* Certification */}
            <div className="pt-10">
              <div className="bg-[#FAFAFA] border border-gray-100 rounded-xl p-8">
                <div className="flex items-center gap-3 text-[18px] font-bold text-black mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black flex-shrink-0">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/>
                  </svg>
                  Certified Quality Guaranteed.
                </div>
                <div className="flex items-start justify-between gap-4">
                  <button className="text-[16px] font-bold underline underline-offset-[6px] decoration-black mt-1 whitespace-nowrap">
                    See Sample Certificate
                  </button>
                  <div className="flex items-center gap-5">
                    <div className="w-[60px] h-[60px] relative">
                      <Image src="/images/product/IGI.png" alt="IGI" fill className="object-contain" />
                    </div>
                    <div className="w-[80px] h-[40px] relative">
                      <Image src="/images/product/SGL.png" alt="SGL" fill className="object-contain" />
                    </div>
                    <div className="w-[80px] h-[40px] relative">
                      <Image src="/images/product/BIS.png" alt="BIS Hallmark" fill className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProductAccordion/>

            {/* Wear This With Slider */}
            <WearThisWith />

          </div>
        </div>
      </div>

      <LuxuryMarquee/>    
      <ProductStory/>  
      <FeaturedIn/>
      <OurProcess/>
      <CustomerReviews/>
      <FAQSection/>
      <DiamondComparison/>
      <ProductSlider title="From the Same Collection" subtitle="Discover matching pieces that perfectly complement one another"/>
      <ExploreOtherRings />
      <CategorySlider/>
      <ProductSlider title="Recently Viewed"/>
      <FindLuciraStore/>
      <JoinLuciraCommunity/>

    </div>
  );
}

function DiamondDetail({ img, shape, pcs, carat, showLeftBorder }) {
  return (
    <div className={`flex flex-col gap-4 ${showLeftBorder ? 'border-l border-gray-200 pl-8' : 'pr-8'}`}>
      <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center p-1 overflow-hidden shadow-sm relative">
        <Image src={img} alt={shape} fill className="object-cover p-1 rounded-full" />
      </div>
      <div className="space-y-2 text-[14px] font-bold">
        <div className="flex justify-between items-center gap-2">
          <span className="text-gray-500 font-medium">Shape:</span>
          <span className="text-black">{shape}</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-gray-500 font-medium">No. of Pcs:</span>
          <span className="text-black">{pcs}</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-gray-500 font-medium">Carat:</span>
          <span className="text-black">{carat}</span>
        </div>
      </div>
    </div>
  );
}

function DiamondInfo({ img, shape, pcs, carat }) {
  return (
    <div className="flex gap-4 border-l border-gray-100 pl-6 first:border-none first:pl-0">
      <div className="w-14 h-14 rounded-full bg-[#F7F7F7] flex items-center justify-center flex-shrink-0 relative overflow-hidden border border-gray-100">
        <Image src={img} alt={shape} fill className="object-cover p-1.5 rounded-full" />
      </div>
      <div className="space-y-1 text-[13px] font-bold">
        <p className="text-gray-400">Shape: <span className="text-black font-bold ml-1">{shape}</span></p>
        <p className="text-gray-400">No. of Pcs: <span className="text-black font-bold ml-1">{pcs}</span></p>
        <p className="text-gray-400">Carat: <span className="text-black font-bold ml-1">{carat}</span></p>
      </div>
    </div>
  );
}

function ExploreCard({ title, description, action, img }) {
  return (
    <div className="bg-[#F9F9F9] border border-gray-100 rounded-lg p-4 flex items-center gap-5">
      <div className="w-24 h-16 rounded-md bg-gray-200 flex-shrink-0 relative overflow-hidden shadow-sm">
        {img && <Image src={img} alt={title} fill className="object-cover" />}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-bold leading-tight">
          {title}
        </p>
        <p className="text-[12px] text-gray-500 font-bold leading-[1.3]">
          {description}
        </p>
      </div>
      <button className="text-[12px] font-bold underline underline-offset-4 decoration-gray-300 hover:text-black whitespace-nowrap">
        {action}
      </button>
    </div>
  );
}


function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="leading-tight tracking-tight">{text}</span>
    </div>
  );
}

function GoldOption({ label, color, active }) {
  return (
    <div
      className={`border rounded-lg p-4 cursor-pointer relative flex flex-col items-center gap-3 transition-all ${
        active
          ? "border-black bg-white ring-1 ring-black shadow-sm"
          : "border-gray-200 bg-[#F9F9F9] hover:border-gray-300"
      }`}
    >
      <span className={`absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#2DB36F]`}></span>
      <div className={`w-8 h-8 rounded-full border border-gray-100 shadow-inner ${color}`}></div>
      <span className={`text-[11px] font-bold text-center leading-tight uppercase tracking-tight ${active ? "text-black" : "text-gray-500"}`}>
        {label}
      </span>
    </div>
  );
}