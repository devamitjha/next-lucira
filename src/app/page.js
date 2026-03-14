"use client";
import HeroSlider from "@/components/home/HeroSlider";
import ExploreRange from "@/components/home/ExploreRange";
import CollectionSection from "@/components/home/homeCollection/CollectionSection";
import CollectionSlider from "@/components/home/homeCollection/CollectionSlider";




export default function Home() {

  return (
    <div className="w-full">
      <HeroSlider/>
      <ExploreRange/>
      <CollectionSection 
        title="Shop Bestsellers"
         tabs={[
          "All",
          "Rings",
          "Earrings",
          "Bracelet",
          "Neclaces",
          "Nosepins",
          "Mangalsutra",
          "Men's Stud",
          "Men's Bracelet",
        ]}
      >        
        <CollectionSlider />
      </CollectionSection>

      <CollectionSection 
        title="Beyond Diamonds, The Gemstone Edit"
         tabs={[
          "All",
          "Rings",
          "Earrings",
          "Bracelet",
          "Neclaces",
          "Nosepins",
          "Mangalsutra",
          "Men's Stud",
          "Men's Bracelet",
        ]}
      >        
        <CollectionSlider />
      </CollectionSection>
      <CollectionSection 
        title="Explore By Collections"
         tabs={[
          "On The Move",
          "Cotton Candy",
          "Hexa",
          "9KT Collection"
        ]}
      >        
        <CollectionSlider />
      </CollectionSection>


    </div>
  );
}