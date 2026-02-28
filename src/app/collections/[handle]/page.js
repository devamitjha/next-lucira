"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";
import ProductCardSkeleton from "@/components/product/ProductCardSkeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import Loader from "@/components/common/Loader";
import { fetchCollectionProducts, fetchCollectionFilters } from "@/lib/api";
import { ChevronDown, XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area"

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
  const [pagesLoaded, setPagesLoaded] = useState(0);

  const [activeSort, setActiveSort] = useState("best_selling");
  const [selectedFilters, setSelectedFilters] = useState({});
  
  // Track which filter groups are expanded. Only "In Store Available" open by default.
  // We'll rebuild this whenever the available filters change so every group has an explicit value.
  const [expandedFilters, setExpandedFilters] = useState({});

  // Fetch products
  const fetchProducts = useCallback(
    async (newCursor = null) => {
      try {
        setLoading(true);
        const data = await fetchCollectionProducts({
          handle,
          limit: 19,
          cursor: newCursor,
          sort: activeSort,
          filters: JSON.stringify(selectedFilters),
        });

        if (newCursor) {
          setProducts((prev) => [...prev, ...data.products]);
          setPagesLoaded((prev) => (prev > 0 ? prev + 1 : 2));
        } else {
          setProducts(data.products);
          setPagesLoaded(1);
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
    setPagesLoaded(0);
    fetchProducts(null);
  }, [activeSort, selectedFilters, handle]);

  // whenever the available filter groups change, reset expansion state
  useEffect(() => {
    const init = {};
    Object.keys(filters).forEach((groupKey) => {
      init[groupKey] = groupKey === "In Store Available";
    });
    setExpandedFilters(init);
  }, [filters]);

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

  const toggleFilterExpand = (groupKey) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  const totalAppliedCount = Object.values(selectedFilters).flat().length;

  // Build grid items and inject promotional image at 3rd and 7th position of each page
  const renderGridItems = () => {
    const items = [];
    const productsPerPage = 19; // as configured in fetchProducts limit

    // base positions on the first page (1-based)
    const basePositions = [3, 7];

    // number of pages based on loaded pages or product count
    const pages = pagesLoaded > 0 ? pagesLoaded : Math.max(1, Math.ceil(products.length / productsPerPage));

    // build a set of global positions where images should appear
    const imagePositions = new Set();
    for (let p = 0; p < pages; p++) {
      basePositions.forEach((bp) => {
        imagePositions.add(bp + p * productsPerPage);
      });
    }

    // iterate products with their global 1-based position and inject images at matching positions
    for (let idx = 0; idx < products.length; idx++) {
      const globalPos = idx + 1; // 1-based

      if (imagePositions.has(globalPos)) {
        items.push(
          <div key={`inpage-${globalPos}`} className="overflow-hidden rounded-lg">
            <Image src="/images/inpage.jpg" alt="Promo" width={800} height={400} className="w-full h-full object-cover rounded-lg" />
          </div>
        );
      }

      const prod = products[idx];
      items.push(<ProductCard key={prod.id} product={prod} showAddToCart={false} />);
    }

    // If there are image positions beyond the current products (e.g., when page skeletons show), ensure images render for those positions too
    // This handles the case where pagesLoaded > computed pages from products length (during pagination loading)
    if (pagesLoaded > Math.ceil(products.length / productsPerPage)) {
      // compute any image positions that fall after current products and render placeholders
      for (let p = 0; p < pages; p++) {
        basePositions.forEach((bp) => {
          const pos = bp + p * productsPerPage;
          if (pos > products.length && imagePositions.has(pos)) {
            items.push(
              <div key={`inpage-future-${pos}`} className="overflow-hidden rounded-lg">
                <Image src="/images/inpage.jpg" alt="Promo" width={800} height={400} className="w-full h-full object-cover rounded-lg" />
              </div>
            );
          }
        });
      }
    }

    return items;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Collection Header */}
      <div className="border-b px-6 py-8">
        <h1 className="text-3xl font-bold capitalize">{handle.replace(/-/g, " ")}</h1>
        <p className="text-gray-600 mt-2">{totalProducts} products</p>
      </div>

      <div className="flex gap-12 py-6 max-w-350 mx-auto">
        {/* ================= FILTERS SIDEBAR ================= */}
        <div className="hidden lg:block w-78 shrink-0">
          <div className="sticky top-5 self-start h-fit">
            <ScrollArea className="w-full h-[calc(100vh-5rem)]">
              <div className="space-y-3 px-4">
                <div>
                  <h3 className="font-semibold mb-3">Filters</h3>
                  {totalAppliedCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs mb-4">
                      Clear All ({totalAppliedCount})
                    </Button>
                  )}
                </div>

                {loading && Object.keys(filters).length === 0 ? (
                  <div className="space-y-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                    ))}
                  </div>
                ) : (
                  <>
                    {Object.entries(filters).map(([groupKey, options]) => {
                      const isExpanded = expandedFilters[groupKey] ?? false;

                      return (
                        <div key={groupKey} className="border-b mb-0">
                          {/* Filter Title with Chevron */}
                          <button
                            onClick={() => toggleFilterExpand(groupKey)}
                            className="w-full flex items-center justify-between py-5 hover:opacity-70 transition-opacity hover:cursor-pointer"
                          >
                            <h4 className="font-medium text-sm capitalize">{groupKey}</h4>
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                isExpanded ? "rotate-0" : "rotate-180"
                              }`}
                            />
                          </button>

                          {/* Filter Options - Collapsible */}
                          {isExpanded && (
                            <div className="space-y-4 my-2 pb-5">
                              {Array.isArray(options) &&
                                options.map((option) => {
                                  const isSelected = selectedFilters[groupKey]?.some(
                                    (o) => o.label === option.label
                                  );

                                  return (
                                    <div key={option.label} className="flex items-center gap-3">
                                      <Checkbox
                                        id={`${groupKey}-${option.label}`}
                                        checked={isSelected}
                                        onCheckedChange={() => toggleFilter(groupKey, option)}
                                      />
                                      <label
                                        htmlFor={`${groupKey}-${option.label}`}
                                        className="text-sm cursor-pointer flex items-center flex-1 gap-2"
                                      >
                                        {option.label}
                                        <div className="text-xs text-gray-500">[{option.count}]</div>
                                      </label>
                                      
                                    </div>
                                  );
                                })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </ScrollArea>
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
                  <div className="space-y-4 mt-6">
                    {totalAppliedCount > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs w-full">
                        Clear All ({totalAppliedCount})
                      </Button>
                    )}
                    {loading && Object.keys(filters).length === 0 ? (
                      <div className="space-y-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                        ))}
                      </div>
                    ) : (
                      Object.entries(filters).map(([groupKey, options]) => {
                        const isExpanded = expandedFilters[groupKey] ?? false;

                        return (
                          <div key={groupKey} className="border-b pb-4">
                            {/* Filter Title with Chevron */}
                            <button
                              onClick={() => toggleFilterExpand(groupKey)}
                              className="w-full flex items-center justify-between py-2 hover:opacity-70 transition-opacity"
                            >
                              <h4 className="font-medium text-sm capitalize">{groupKey}</h4>
                              <ChevronDown
                                size={18}
                                className={`transition-transform duration-300 ${
                                  isExpanded ? "rotate-0" : "rotate-180"
                                }`}
                              />
                            </button>

                            {/* Filter Options - Collapsible */}
                            {isExpanded && (
                              <div className="space-y-2 mt-3">
                                {Array.isArray(options) &&
                                  options.map((option) => {
                                    const isSelected = selectedFilters[groupKey]?.some(
                                      (o) => o.label === option.label
                                    );

                                    return (
                                      <div key={option.label} className="flex items-center gap-2">
                                        <Checkbox
                                          id={`m-${groupKey}-${option.label}`}
                                          checked={isSelected}
                                          onCheckedChange={() => toggleFilter(groupKey, option)}
                                        />
                                        <label
                                          htmlFor={`m-${groupKey}-${option.label}`}
                                          className="text-sm cursor-pointer flex-1"
                                        >
                                          {option.label}
                                        </label>
                                        <span className="text-xs text-gray-500">{option.count}</span>
                                      </div>
                                    );
                                  })}
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
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

          {/* Applied Filters Badges */}
          {totalAppliedCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {Object.entries(selectedFilters).map(([groupKey, options]) =>
                options.map((opt) => (
                  <Badge
                    key={`${groupKey}-${opt.label}`}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => toggleFilter(groupKey, opt)}
                  >
                    <span>{opt.label}</span>
                    <XIcon className="size-3 ml-1" />
                  </Badge>
                ))
              )}
              <Button variant="link" size="sm" className="ml-4" onClick={clearAllFilters}>
                Remove all
              </Button>
            </div>
          )}

          {/* Products Grid */}
          {loading && products.length === 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderGridItems()}
              </div>

              {/* Pagination skeletons when loading next page */}
              {loading && hasNextPage && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <ProductCardSkeleton key={`p-${i}`} />
                  ))}
                </div>
              )}

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
