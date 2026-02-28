"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import Loader from "@/components/common/Loader";
import { fetchCollectionProducts, fetchCollectionFilters } from "@/lib/api";
import { ChevronDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "best_selling", label: "Best Selling" },
  { value: "price_low_high", label: "Price: Low to High" },
  { value: "price_high_low", label: "Price: High to Low" },
  { value: "az", label: "A to Z" },
];

export default function CollectionPage() {
  const params = useParams();
  const handle = params?.handle || "all";

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);

  const [activeSort, setActiveSort] = useState("best_selling");
  const [selectedFilters, setSelectedFilters] = useState({});

  // Fetch products
  const fetchProducts = useCallback(
    async (newCursor = null) => {
      try {
        setLoading(true);
        const data = await fetchCollectionProducts({
          handle,
          limit: 20,
          cursor: newCursor,
          sort: activeSort,
          filters: JSON.stringify(selectedFilters),
        });

        if (newCursor) {
          setProducts((prev) => [...prev, ...data.products]);
        } else {
          setProducts(data.products);
        }

        setFilters(data.filters || {});
        setCursor(data.pageInfo?.endCursor || null);
        setHasNextPage(data.pageInfo?.hasNextPage || false);
        setTotalProducts(data.totalProducts || 0);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    },
    [handle, activeSort, selectedFilters]
  );

  // Initial load and when filters/sort change
  useEffect(() => {
    setProducts([]);
    setCursor(null);
    fetchProducts(null);
  }, [activeSort, selectedFilters, handle]);

  const handleSort = (value) => {
    setActiveSort(value);
  };

  const toggleFilter = (groupKey, option) => {
    setSelectedFilters((prev) => {
      const current = prev[groupKey] || [];
      const exists = current.some((o) => o.label === option.label);

      const updated = exists
        ? current.filter((o) => o.label !== option.label)
        : [...current, option];

      const next = { ...prev };
      updated.length ? (next[groupKey] = updated) : delete next[groupKey];
      return next;
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
  };

  const totalAppliedCount = Object.values(selectedFilters).flat().length;

  return (
    <div className="min-h-screen bg-white">
      {/* Collection Header */}
      <div className="border-b px-6 py-8">
        <h1 className="text-3xl font-bold capitalize">{handle.replace(/-/g, " ")}</h1>
        <p className="text-gray-600 mt-2">{totalProducts} products</p>
      </div>

      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        {/* ================= FILTERS SIDEBAR ================= */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Filters</h3>
              {totalAppliedCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs mb-4">
                  Clear All ({totalAppliedCount})
                </Button>
              )}
            </div>

            {Object.entries(filters).map(([groupKey, options]) => (
              <div key={groupKey}>
                <h4 className="font-medium text-sm mb-3 capitalize">{groupKey}</h4>
                <div className="space-y-2">
                  {Array.isArray(options) &&
                    options.map((option) => {
                      const isSelected = selectedFilters[groupKey]?.some((o) => o.label === option.label);

                      return (
                        <div key={option.label} className="flex items-center gap-2">
                          <Checkbox id={`${groupKey}-${option.label}`} checked={isSelected} onCheckedChange={() => toggleFilter(groupKey, option)} />
                          <label htmlFor={`${groupKey}-${option.label}`} className="text-sm cursor-pointer flex-1">
                            {option.label}
                          </label>
                          <span className="text-xs text-gray-500">{option.count}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PRODUCTS SECTION ================= */}
        <div className="flex-1 space-y-6">
          {/* Toolbar */}
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-3">
              {/* Mobile Filter Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden">
                    Filters {totalAppliedCount > 0 && `(${totalAppliedCount})`}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-6 mt-6">
                    {totalAppliedCount > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs w-full">
                        Clear All ({totalAppliedCount})
                      </Button>
                    )}
                    {Object.entries(filters).map(([groupKey, options]) => (
                      <div key={groupKey}>
                        <h4 className="font-medium text-sm mb-3 capitalize">{groupKey}</h4>
                        <div className="space-y-2">
                          {Array.isArray(options) &&
                            options.map((option) => {
                              const isSelected = selectedFilters[groupKey]?.some((o) => o.label === option.label);

                              return (
                                <div key={option.label} className="flex items-center gap-2">
                                  <Checkbox id={`m-${groupKey}-${option.label}`} checked={isSelected} onCheckedChange={() => toggleFilter(groupKey, option)} />
                                  <label htmlFor={`m-${groupKey}-${option.label}`} className="text-sm cursor-pointer flex-1">
                                    {option.label}
                                  </label>
                                  <span className="text-xs text-gray-500">{option.count}</span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort:</span>
                <select value={activeSort} onChange={(e) => handleSort(e.target.value)} className="text-sm border rounded-md px-3 py-2">
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Options - can extend later */}
            <span className="text-sm text-gray-500">Showing {products.length} of {totalProducts}</span>
          </div>

          {/* Products Grid */}
          {loading && products.length === 0 ? (
            <div className="flex justify-center items-center py-20">
              <Loader />
            </div>
          ) : products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} showAddToCart={false} />
                ))}
              </div>

              {/* Load More Button */}
              {hasNextPage && (
                <div className="flex justify-center py-8">
                  <Button onClick={() => fetchProducts(cursor)} disabled={loading} size="lg">{loading ? "Loading..." : "Load More"}</Button>
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-center items-center py-20">
              <p className="text-gray-500">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
