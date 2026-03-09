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
    <div className="mt-12 border-t">

      <Accordion type="single" collapsible className="w-full">

        <Item title="Story Behind The Product">
          Our designers crafted this ring to reflect elegance and timeless beauty.
          Every piece is handcrafted by expert artisans ensuring the highest
          quality and finish.
        </Item>

        <Item title="Product Passport">
          Each Lucira piece includes a digital product passport containing
          material details, certifications, and authenticity information.
        </Item>

        <Item title="Warranty & Return Policy">
          Lucira offers lifetime exchange and a 15-day free return policy.
          All products come with certified quality assurance.
        </Item>

        <Item title="Care & Maintenance">
          Clean your jewelry with a soft cloth and avoid chemicals or perfumes
          for long-lasting shine.
        </Item>


        {/* What's in the package */}

        <AccordionItem value="package">

          <AccordionTrigger className="text-lg font-medium py-5">
            What’s In The Package
          </AccordionTrigger>

          <AccordionContent asChild>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="pb-6"
            >

              <div className="flex gap-6 mb-4">

                <Image
                  src="/images/product/package1.jpg"
                  alt="Box"
                  width={120}
                  height={120}
                  className="rounded-lg bg-gray-100"
                />

                <Image
                  src="/images/product/package2.jpg"
                  alt="Cloth"
                  width={120}
                  height={120}
                  className="rounded-lg bg-gray-100"
                />

                <Image
                  src="/images/product/package3.jpg"
                  alt="Card"
                  width={120}
                  height={120}
                  className="rounded-lg bg-gray-100"
                />

              </div>

              <p className="text-muted-foreground leading-relaxed">
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
    <AccordionItem value={title}>

      <AccordionTrigger className="text-lg font-medium py-5">
        {title}
      </AccordionTrigger>

      <AccordionContent asChild>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="pb-6 text-muted-foreground"
        >
          {children}
        </motion.div>

      </AccordionContent>

    </AccordionItem>
  );
}