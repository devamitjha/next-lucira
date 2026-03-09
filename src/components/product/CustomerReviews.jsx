"use client";

import { Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CustomerReviews() {
  return (
    <section className="w-full px-[68px] py-16 bg-gray-50">

      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}

        <h2 className="text-xl font-semibold text-center mb-10">
          Customer Reviews
        </h2>


        {/* Review Summary */}

        <div className="grid grid-cols-3 gap-10 items-center mb-10">

          {/* Rating */}

          <div className="text-center">

            <p className="text-5xl font-semibold">4.9</p>

            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-black"
                />
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              123 reviews
            </p>

          </div>


          {/* Rating bars */}

          <div className="space-y-2">

            <RatingRow label="5 Stars" value={85} />
            <RatingRow label="4 Stars" value={15} />
            <RatingRow label="3 Stars" value={0} />
            <RatingRow label="2 Stars" value={0} />
            <RatingRow label="1 Star" value={0} />

          </div>


          {/* Recommendation */}

          <div className="text-center">

            <p className="text-3xl font-semibold">97%</p>

            <p className="text-sm text-muted-foreground">
              Would recommend
              <br />
              this product
            </p>

          </div>

        </div>


        {/* Write Review */}

        <div className="flex justify-center mb-10">
          <Button className="px-6">
            WRITE A REVIEW
          </Button>
        </div>


        {/* Review Images */}

        <div className="flex gap-3 overflow-x-auto mb-10">

          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-[70px] h-[70px] rounded-md bg-gray-200 shrink-0"
            />
          ))}

        </div>


        {/* Filters */}

        <div className="flex justify-between text-sm mb-6">

          <p>
            Rating: <span className="text-muted-foreground">All</span>
          </p>

          <p className="text-muted-foreground">
            54 reviews
          </p>

          <p>
            Sort by: <span className="text-muted-foreground">Featured</span>
          </p>

        </div>


        {/* Reviews Grid */}

        <div className="grid md:grid-cols-2 gap-6">

          <ReviewCard
            name="Aesha S V"
            title="Absolutely stunning in person"
            review="The round cut sparkles beautifully and looks even better than the photos. It feels elegant, timeless, and incredibly well made."
          />

          <ReviewCard
            name="Aaryan N"
            title="She Said Yes Instantly!"
            review="I bought this ring for my fiancée and she absolutely loves it. She hasn’t stopped admiring the sparkle and design."
          />

          <ReviewCard
            name="Kirti N"
            title="Perfect fit and finish"
            review="The ring fits perfectly and feels very comfortable to wear. You can tell a lot of care has gone into the craftsmanship."
          />

          <ReviewCard
            name="Shivani V"
            title="Exceeded my expectations!"
            review="The diamond catches the light from every angle. It looks luxurious and refined without being over the top."
          />

          <ReviewCard
            name="Twinkle S"
            title="Smooth delivery and beautiful packaging"
            review="The ring arrived on time and was packaged beautifully. Everything felt premium from unboxing to the final fit."
          />

          <ReviewCard
            name="Steffi J"
            title="So much value for the quality"
            review="I was amazed at how much I saved choosing a lab-grown diamond. The quality and brilliance are exceptional for the price."
          />

        </div>


        {/* Read more */}

        <div className="flex justify-center mt-10">

          <Button variant="outline">
            READ MORE REVIEWS
          </Button>

        </div>

      </div>

    </section>
  );
}



function RatingRow({ label, value }) {
  return (
    <div className="flex items-center gap-3 text-sm">

      <span className="w-16">{label}</span>

      <div className="flex-1 h-[6px] bg-gray-200 rounded">

        <div
          className="h-[6px] bg-black rounded"
          style={{ width: `${value}%` }}
        />

      </div>

      <span className="w-8 text-right">{value}%</span>

    </div>
  );
}



function ReviewCard({ name, title, review }) {
  return (
    <div className="border rounded-lg p-5 space-y-4 bg-white">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full bg-gray-200"></div>

          <span className="text-sm font-medium">
            {name}
          </span>

          <CheckCircle size={14} className="text-green-600" />

        </div>


        <div className="flex items-center gap-1">

          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-black"
            />
          ))}

          <span className="text-xs ml-1">(4.9)</span>

        </div>

      </div>


      {/* Title */}

      <p className="font-medium">
        {title}
      </p>


      {/* Text */}

      <p className="text-sm text-muted-foreground">
        {review}
      </p>


      {/* Image placeholder */}

      <div className="w-[80px] h-[80px] rounded-md bg-gray-200"></div>

    </div>
  );
}