"use client";

import { MapPin, Phone, Calendar, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FindLuciraStore() {
  return (
    <section className="w-full px-[68px] py-20 bg-gray-50 mt-15">

      <div className="max-w-[1200px] mx-auto text-center">

        <h2 className="text-xl font-semibold mb-6">
          Find in Lucira Store Near You
        </h2>

        {/* Pincode */}

        <div className="flex justify-center gap-3 mb-4">

          <Input
            placeholder="Enter pin code to check delivery time"
            className="max-w-[420px]"
          />

          <Button>
            CHECK
          </Button>

        </div>

        <p className="text-sm text-muted-foreground mb-10">
          Estimated free dispatch by <b>January 21, 2026</b>
        </p>

      </div>


      {/* Store Card */}

      <div className="max-w-[1200px] mx-auto bg-white border rounded-lg overflow-hidden grid md:grid-cols-2">

        {/* Map / Image */}

        <div className="bg-gray-200 h-[260px] md:h-auto relative">

          <span className="absolute top-4 left-4 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
            ● Open Now
          </span>

        </div>


        {/* Store Info */}

        <div className="p-6 space-y-4">

          <div className="flex justify-between items-center">

            <h3 className="font-semibold text-lg">
              Pune Lucira Store
            </h3>

            <span className="text-sm">⭐⭐⭐⭐⭐ 4.8</span>

          </div>

          <p className="text-sm text-muted-foreground">
            Shop no. 3,4, Balgandharv Chowk, Sai Square,
            5 & 6, Jangali Maharaj Rd, Pune,
            Maharashtra 411005
          </p>

          <div className="bg-gray-100 text-sm px-3 py-2 rounded-full w-fit">
            ⏱ Timings: Monday - Sunday | 10:30 am - 10:00 pm
          </div>


          {/* Product preview */}

          <div className="flex gap-3 bg-gray-100 p-3 rounded-md">

            <div className="w-[60px] h-[60px] bg-gray-300 rounded-md"></div>

            <div className="text-sm">

              <p className="font-medium">
                2 CT Round Cut with Side Diamonds Accent Engagement Ring
              </p>

              <p className="text-muted-foreground text-xs">
                Size 12 | Yellow Gold
              </p>

              <p className="text-xs">
                Available by 27 January, 2026
              </p>

            </div>

          </div>


          {/* Actions */}

          <div className="flex gap-3 pt-2">

            <Button variant="outline">
              <Navigation size={16} className="mr-2" />
              DIRECT ME
            </Button>

            <Button variant="outline">
              <Phone size={16} className="mr-2" />
              CALL US
            </Button>

            <Button>
              <Calendar size={16} className="mr-2" />
              BOOK APPOINTMENT
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}