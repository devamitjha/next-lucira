"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PriceSavingsDetails() {
  return (
    <div className="mt-8">
      <h2 className="text-[20px] font-bold tracking-tight mb-5">Price & Savings Details:</h2>

      <div className="bg-[#FAFAFA] border border-gray-100 rounded-xl p-6">
        <Tabs defaultValue="price" className="w-full">
          <TabsList className="grid grid-cols-2 bg-[#EDEDED] p-1 rounded-lg h-[54px] mb-8 w-full">
            <TabsTrigger 
              value="price" 
              className="flex items-center justify-center gap-3 font-bold text-[15px] data-[state=active]:bg-black data-[state=active]:text-white rounded-md transition-all h-full"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="8" x2="16" y1="10" y2="10"/><line x1="8" x2="12" y1="14" y2="14"/><line x1="8" x2="10" y1="18" y2="18"/></svg>
              Price Breakup
            </TabsTrigger>
            <TabsTrigger 
              value="savings" 
              className="flex items-center justify-center gap-3 font-bold text-[15px] data-[state=active]:bg-black data-[state=active]:text-white rounded-md transition-all h-full"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
              Your Savings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="price" className="mt-0 outline-none">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <PriceRow label="14K Yellow Gold (₹8,201/g)" value="₹17,049" />
              <PriceRow 
                label="E-F, VVS/VS (9 Pcs.)" 
                value="₹75,840" 
                oldValue="₹101,120" 
              />
              <PriceRow label="Making Charges" value="₹4,158" />
              <PriceRow label="GST (3%)" value="₹2,911" />
              
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <span className="text-[18px] font-bold text-black">Grand Total</span>
                <span className="text-[18px] font-bold text-black">₹99,959</span>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="savings" className="mt-0 outline-none">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <PriceRow label="Diamond Discount" value="₹25,280" isSaving />
              <PriceRow label="Lucira Coins" value="₹500" isSaving />
              <PriceRow label="Festival Offer" value="₹3,200" isSaving />
              
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <span className="text-[18px] font-bold text-black">Total Savings</span>
                <span className="text-[18px] font-bold text-[#1E7D4E]">₹28,980</span>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function PriceRow({ label, value, oldValue, isSaving }) {
  return (
    <div className="flex justify-between items-center text-[15px] font-medium">
      <span className="text-gray-900">{label}</span>
      <div className="flex items-center gap-4">
        {oldValue && (
          <span className="text-gray-300 line-through font-bold">{oldValue}</span>
        )}
        <span className={`font-bold ${isSaving ? 'text-[#1E7D4E]' : 'text-black'}`}>{value}</span>
      </div>
    </div>
  );
}
