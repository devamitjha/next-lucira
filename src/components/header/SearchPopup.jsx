"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HighlightMatch = ({ text, query }) => {
  if (!query) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <strong key={i} className="font-extrabold text-black">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default function SearchPopup({ onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches] = useState([
    "gold",
    "rings",
    "more",
    "ring",
    "rings",
    "earring",
  ]);

  const TRENDING_SEARCHES = [
    "Rings",
    "Engagement Rings Under 50k",
    "Necklaces",
    "Earrings",
    "Pendants",
  ];

  const SUGGESTIONS = [
    "Marquise Cut Engagement Ring with Halo Setting",
    "Oval Cut Engagement Ring with Halo Setting",
    "Marquise Cut with Side Diamonds Accent Engagement Ring",
    "Round Cut with Side Diamonds Accent Engagement Ring",
    "Oval Cut with Side Diamonds Accent Engagement Ring",
    "Pear Cut with Side Diamonds Accent Engagement Ring",
  ];

  const handleSearch = async (e) => {
    const query = typeof e === "string" ? e : e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      setIsSearching(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setSearchResults(data.results || []);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setIsSearching(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <motion.div 
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
      className="fixed inset-0 bg-white z-[9999] overflow-y-auto"
    >
      <div className="w-full max-w-480 mx-auto px-17 min-[1440px]:px-17 py-12 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <X size={24} className="text-black" />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-[28px] font-normal text-[#1A1A1A]">Search Product</h2>
        </div>

        {/* Search Bar */}
        <div className="max-w-[850px] mx-auto mb-14">
          <div className="relative flex items-center">
            <input
              autoFocus
              type="text"
              placeholder=""
              className="w-full h-16 pl-8 pr-16 rounded-full border border-[#D4A395] text-lg focus:outline-none"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="absolute right-2.5 w-11 h-11 rounded-full bg-[#A37469] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
              <Search size={22} />
            </button>
          </div>
        </div>

        <div className="w-full space-y-12">
          {/* Trending Search */}
          <section>
            <h3 className="text-base font-semibold mb-4 text-[#1A1A1A]">Trending Search</h3>
            <div className="flex flex-wrap gap-3">
              {TRENDING_SEARCHES.map((item) => (
                <button
                  key={item}
                  onClick={() => handleSearch(item)}
                  className="px-5 py-2 rounded-full border border-gray-200 text-sm text-[#4D4D4D] hover:border-[#D4A395] hover:text-[#D4A395] transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          {searchQuery.length > 0 && (
            <>
              {/* Suggestions */}
              <section className="animate-in fade-in slide-in-from-top-2 duration-300">
                <h3 className="text-base font-semibold mb-4 text-[#1A1A1A]">Suggestions</h3>
                <div className="flex flex-wrap gap-3">
                  {SUGGESTIONS.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleSearch(item)}
                      className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-100 bg-white text-sm text-[#4D4D4D] hover:border-[#D4A395] hover:text-[#D4A395] transition-all"
                    >
                      <Search size={14} className="text-[#808080]" />
                      <HighlightMatch text={item} query={searchQuery} />
                    </button>
                  ))}
                </div>
              </section>

              {/* Search Result */}
              <section className="animate-in fade-in slide-in-from-top-4 duration-500">
                <h3 className="text-base font-semibold mb-6 text-[#1A1A1A]">Search Result</h3>
                {isSearching ? (
                  <div className="flex justify-center py-10">
                    <div className="w-8 h-8 border-2 border-gray-100 border-t-[#D4A395] rounded-full animate-spin" />
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.handle}`}
                        className="group"
                        onClick={onClose}
                      >
                        <div className="aspect-square bg-[#F5F5F5] rounded-lg p-4 flex items-center justify-center mb-3 relative overflow-hidden">
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="text-gray-200">
                              <Search size={32} />
                            </div>
                          )}
                        </div>
                        <p className="text-[13px] font-normal text-[#1A1A1A] line-clamp-2 h-9 leading-snug mb-2">
                           <HighlightMatch text={product.title} query={searchQuery} />
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-bold text-[#1A1A1A]">₹{product.price}</span>
                          {product.comparePrice && (
                            <span className="text-[12px] text-[#999999] line-through">₹{product.comparePrice}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-4 text-gray-400 text-sm">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </section>
            </>
          )}

          {/* Recently Searched */}
          <section>
            <h3 className="text-base font-semibold mb-4 text-[#1A1A1A]">Recently Searched</h3>
            <div className="flex flex-wrap gap-3">
              {recentSearches.map((item, idx) => (
                <button
                  key={`${item}-${idx}`}
                  onClick={() => handleSearch(item)}
                  className="px-5 py-2 rounded-full border border-gray-200 text-sm text-[#4D4D4D] hover:border-[#D4A395] hover:text-[#D4A395] transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
