"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Receipt, Banknote } from "lucide-react";

export default function PriceSavingsDetails() {
  return (
    <div className="mt-10">

      <h2 className="text-lg font-semibold mb-4">
        Price & Savings Details:
      </h2>

      <div className="border rounded-lg p-4">

        <Tabs defaultValue="price" className="w-full">

          {/* Tabs */}

          <TabsList className="grid grid-cols-2 bg-muted p-1 rounded-md mb-4">

            <TabsTrigger value="price" className="relative flex items-center gap-2">
              <Receipt size={16} />
              Price Breakup
            </TabsTrigger>

            <TabsTrigger value="savings" className="relative flex items-center gap-2">
              <Banknote size={16} />
              Your Savings
            </TabsTrigger>

          </TabsList>


          {/* Price Breakup */}

          <TabsContent value="price">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 text-sm"
            >

              <Row
                label="14K Yellow Gold (₹8,201/g)"
                value="₹17,049"
              />

              <Row
                label="E-F, VVS/VS (9 Pcs.)"
                value="₹75,840"
                old="₹101,120"
              />

              <Row
                label="Making Charges"
                value="₹4,158"
              />

              <Row
                label="GST (3%)"
                value="₹2,911"
              />

              <div className="flex justify-between font-semibold text-base pt-3 border-t">
                <span>Grand Total</span>
                <span>₹99,959</span>
              </div>

            </motion.div>

          </TabsContent>


          {/* Savings Tab */}

          <TabsContent value="savings">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 text-sm"
            >

              <Row
                label="Diamond Discount"
                value="₹25,280"
              />

              <Row
                label="Lucira Coins"
                value="₹500"
              />

              <Row
                label="Festival Offer"
                value="₹3,200"
              />

              <div className="flex justify-between font-semibold text-base pt-3 border-t">
                <span>Total Savings</span>
                <span>₹28,980</span>
              </div>

            </motion.div>

          </TabsContent>

        </Tabs>

      </div>

    </div>
  );
}


function Row({ label, value, old }) {
  return (
    <div className="flex justify-between items-center">

      <span>{label}</span>

      <div className="flex items-center gap-2">

        {old && (
          <span className="text-muted-foreground line-through">
            {old}
          </span>
        )}

        <span className="font-medium">{value}</span>

      </div>

    </div>
  );
}