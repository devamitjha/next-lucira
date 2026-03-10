"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function JoinLuciraCommunity() {
  return (
    <section className="w-full bg-[#F9F9F9] overflow-hidden mt-16 pe-17">
      <div className="grid md:grid-cols-2 gap-16 items-stretch">
        {/* Left Side: Images */}
        <div className="flex h-80">
          <div className="w-1/2 relative bg-[#E5E5E5]">
            <Image
              src="/images/subscribe-2.jpg"
              alt="Community 1"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="w-1/2 relative bg-[#F0F0F0]">
            <Image
              src="/images/subscribe-1.jpg"
              alt="Community 2"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center py-10">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Join the Lucira Community Today
            </h2>

            <p className="text-[15px] leading-relaxed text-[#333333] mb-8">
              Get early access to jewelry drops, care tips, and exclusive offers, straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Input 
                  placeholder="Enter your email" 
                  className="h-13 bg-white border-[#A1A1A1] rounded-md px-6 text-base placeholder:text-[#8E8E8E] focus-visible:ring-1 focus-visible:ring-black"
                />
              </div>

              <Button className="h-14 px-10 bg-black hover:bg-black/90 text-white font-bold text-base rounded-md tracking-wide">
                Subscribe
              </Button>
            </div>

            <p className="text-[13px] text-[#333333]">
              You can unsubscribe anytime. For more details read our{" "}
              <a href="#" className="underline hover:text-black transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
