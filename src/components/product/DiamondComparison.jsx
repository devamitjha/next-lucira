"use client";
import React from "react";

import { CheckCircle, XCircle, Sparkles, RefreshCcw } from "lucide-react";

export default function DiamondComparison() {
  const rows = [
    {
      label: "Chemically and physically a real diamond",
      lab: true,
      mined: true,
    },
    {
      label: "Graded by global certification standards (cut, color, clarity, carat)",
      lab: true,
      mined: true,
    },
    {
      label: "Better value for the same quality (40–70% more affordable)",
      lab: true,
      mined: false,
    },
    {
      label: "Environmentally responsible and conflict-free",
      lab: true,
      mined: false,
    },
    {
      label: "Durable and suitable for everyday, lifetime wear",
      lab: true,
      mined: true,
    },
    {
      label: "Wider flexibility in shapes, sizes, and design options",
      lab: true,
      mined: false,
    },
    {
      label: "Ethically produced without human rights concerns",
      lab: true,
      mined: false,
    },
  ];

  return (
    <section className="w-full px-[68px] py-20 bg-gray-50 mt-15">

      <div className="max-w-[1000px] mx-auto">

        {/* Title */}

        <h2 className="text-xl font-semibold text-center mb-12">
          Lab Grown Vs. Mined Diamonds
        </h2>


        {/* Table */}

        <div className="grid grid-cols-[1.3fr_1fr_1fr] text-sm">

          {/* Header */}

          <div className="pb-6 font-medium text-muted-foreground">
            Comparison Basis
          </div>

          <div className="pb-6 text-center font-medium bg-gray-50 rounded-t-lg border">
            Lab-Grown Diamond
          </div>

          <div className="pb-6 text-center font-medium">
            Mined Diamond
          </div>


         {rows.map((row, i) => (
            <React.Fragment key={i}>

                {/* Label */}
                <div className="py-6 pr-6 border-t text-muted-foreground">
                {row.label}
                </div>

                {/* Lab */}
                <div className="py-6 text-center border-t bg-gray-50 border-x">
                {row.lab ? (
                    <CheckCircle size={18} className="mx-auto text-black" />
                ) : (
                    <XCircle size={18} className="mx-auto text-gray-400" />
                )}
                </div>

                {/* Mined */}
                <div className="py-6 text-center border-t">
                {row.mined ? (
                    <CheckCircle size={18} className="mx-auto text-black" />
                ) : (
                    <XCircle size={18} className="mx-auto text-gray-400" />
                )}
                </div>

            </React.Fragment>
            ))}
        </div>


        {/* Bottom Info */}

        <div className="space-y-4 mt-10">

          <div className="flex gap-3 items-start bg-gray-100 rounded-md p-4 text-sm">

            <RefreshCcw size={18} />

            <p>
              Every lab-grown diamond jewelry by Lucira comes with lifetime
              buyback assurance.
            </p>

          </div>

          <div className="flex gap-3 items-start bg-gray-100 rounded-md p-4 text-sm">

            <Sparkles size={18} />

            <p>
              The only real difference is how they’re formed; lab-grown and
              natural diamonds are optically identical, with no visible
              difference to the naked eye, with distinctions detectable only
              by experts using advanced equipment.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}