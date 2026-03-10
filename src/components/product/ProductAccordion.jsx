"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductAccordion() {
  return (
    <div className="mt-10 border-t border-gray-100">
      <Accordion type="single" collapsible defaultValue="package" className="w-full">
        <Item title="Story Behind The Product">
          <p className="text-[14px] font-medium leading-relaxed text-gray-600">
            Our designers crafted this ring to reflect elegance and timeless beauty.
            Every piece is handcrafted by expert artisans ensuring the highest
            quality and finish.
          </p>
        </Item>

        <Item title="Product Passport">
          <p className="text-[14px] font-medium leading-relaxed text-gray-600">
            Each Lucira piece includes a digital product passport containing
            material details, certifications, and authenticity information.
          </p>
        </Item>

        <Item title="Warranty & Return Policy">
          <p className="text-[14px] font-medium leading-relaxed text-gray-600">
            Lucira offers lifetime exchange and a 15-day free return policy.
            All products come with certified quality assurance.
          </p>
        </Item>

        <Item title="Care & Maintenance">
          <p className="text-[14px] font-medium leading-relaxed text-gray-600">
            Clean your jewelry with a soft cloth and avoid chemicals or perfumes
            for long-lasting shine.
          </p>
        </Item>

        {/* What's in the package */}
        <AccordionItem value="package" className="border-b border-gray-100">
          <AccordionTrigger className="text-[18px] font-bold py-6 hover:no-underline text-black">
            What's In The Package
          </AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pb-8"
            >
              <div className="flex gap-3 mb-6">
                <div className="w-[100px] aspect-square bg-[#EDEDED] rounded-lg relative overflow-hidden">
                   <Image src="/images/product/package/Box.jpg" alt="Box" fill className="object-cover" />
                </div>
                <div className="w-[100px] aspect-square bg-[#EDEDED] rounded-lg relative overflow-hidden">
                   <Image src="/images/product/package/Selvet.jpg" alt="Cloth" fill className="object-cover" />
                </div>
                <div className="w-[100px] aspect-square bg-[#EDEDED] rounded-lg relative overflow-hidden">
                   <Image src="/images/product/package/Thank-You-Card.jpg" alt="Card" fill className="object-cover" />
                </div>
              </div>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed">
                Your Lucira jewelry piece arrives in a premium jewelry box,
                accompanied by a soft velvet polishing cloth and a thank-you card,
                crafted to make every unboxing feel special.
              </p>
            </motion.div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function Item({ title, children }) {
  return (
    <AccordionItem value={title} className="border-b border-gray-100">
      <AccordionTrigger className="text-[18px] font-bold py-6 hover:no-underline text-black">
        {title}
      </AccordionTrigger>
      <AccordionContent asChild>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pb-6"
        >
          {children}
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
}
