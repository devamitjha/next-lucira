"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function JoinLuciraCommunity() {
  return (
    <section className="w-full px-[68px] py-20 bg-gray-50 mt-15">

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image / placeholder */}

        <div className="bg-gray-200 h-[260px] rounded-lg"></div>


        {/* Content */}

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Join the Lucira Community Today
          </h2>

          <p className="text-sm text-muted-foreground mb-6">
            Get early access to jewelry drops, care tips,
            and exclusive offers, straight to your inbox.
          </p>


          <div className="flex gap-3 mb-3">

            <Input placeholder="Enter your email" />

            <Button>
              Subscribe
            </Button>

          </div>

          <p className="text-xs text-muted-foreground">
            You can unsubscribe anytime. For more details read our{" "}
            <span className="underline cursor-pointer">
              Privacy Policy
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}