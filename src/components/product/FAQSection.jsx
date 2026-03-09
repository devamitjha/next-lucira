"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function QuestionsAnswered() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a Lab Grown Diamond?",
      answer:
        "Lab Grown Diamonds are Real Diamonds, identical to natural ones in chemical, physical, and optical properties, with only one key difference: their origin. While Natural Diamonds form deep within the Earth over billions of years, Lab Grown Diamonds are created in controlled environments using advanced technology. They offer the same brilliance and durability including the same hardness and resistance to scratches or damage at up to 85% less cost.",
    },
    {
      question: "What if I order the wrong ring size?",
      answer:
        "We offer complimentary resizing within 15 days of delivery.",
    },
    {
      question: "Do you offer a free ring sizer?",
      answer:
        "Yes, we provide a free ring sizer so you can measure accurately at home.",
    },
    {
      question: "Can I get my engagement ring engraved for free?",
      answer:
        "Yes, engraving is complimentary on select products.",
    },
    {
      question: "What is your lifetime buyback policy?",
      answer:
        "Lucira offers lifetime exchange and buyback options for eligible jewellery.",
    },
    {
      question: "What is made-to-order and how long does it take to deliver?",
      answer:
        "Made-to-order jewellery is crafted specifically for you and usually ships within 10–14 days.",
    },
  ];

  return (
    <section className="w-full px-[68px] py-20 bg-gray-50 mt-15">

      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 ">

        {/* LEFT SIDE FAQ */}

        <div>

          <h2 className="text-[22px] font-semibold mb-8">
            Your Questions Answered
          </h2>

          <div className="border-t">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b py-6"
                >

                  {/* Question */}

                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="font-medium text-[15px]">
                      {faq.question}
                    </span>

                    <span className="text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>


                  {/* Answer */}

                  <AnimatePresence>

                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >

                        <p className="text-sm text-gray-600 leading-relaxed mt-4 max-w-[520px]">
                          {faq.answer}
                        </p>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>
              );
            })}

          </div>

        </div>


        {/* RIGHT SIDE IMAGE */}

        <div className="relative w-full h-[460px] rounded-lg overflow-hidden bg-gray-200">

          <Image
            src="/images/product/faq-image.jpg"
            alt="FAQ"
            fill
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}