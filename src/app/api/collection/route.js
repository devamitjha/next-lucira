import { NextResponse } from "next/server";
import { shopifyStorefrontFetch, shopifyAdminFetch } from "@/lib/shopify";

const SORT_MAP = {
  best_selling: { sortKey: "BEST_SELLING", reverse: false },
  price_low_high: { sortKey: "PRICE", reverse: false },
  price_high_low: { sortKey: "PRICE", reverse: true },
  az: { sortKey: "TITLE", reverse: false },
};

const parseFilters = (rawFilters) => {
  if (!rawFilters) return [];
  try {
    const parsed =
      typeof rawFilters === "string" ? JSON.parse(rawFilters) : rawFilters;

    const shopifyFilters = [];
    Object.values(parsed).forEach((group) => {
      if (!Array.isArray(group)) return;
      group.forEach((opt) => {
        if (!opt?.input) return;
        shopifyFilters.push(
          typeof opt.input === "string" ? JSON.parse(opt.input) : opt.input
        );
      });
    });

    return shopifyFilters;
  } catch {
    return [];
  }
};

const collectionCountCache = new Map();

const getCollectionTotalCount = async (handle) => {
  const cacheKey = `collection-count:${handle}`;
  if (collectionCountCache.has(cacheKey)) {
    return collectionCountCache.get(cacheKey);
  }

  const query = `
    query CollectionProductCount($query: String!) {
      collections(first: 1, query: $query) {
        edges {
          node {
            productsCount { count }
          }
        }
      }
    }
  `;

  const data = await shopifyAdminFetch(query, {
    query: `handle:${handle}`,
  });

  const count =
    data?.collections?.edges?.[0]?.node?.productsCount?.count ?? 0;

  collectionCountCache.set(cacheKey, count);
  setTimeout(() => collectionCountCache.delete(cacheKey), 10 * 60 * 1000);

  return count;
};

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const handle = searchParams.get("handle");
    const sort = searchParams.get("sort") || "best_selling";
    const cursor = searchParams.get("cursor");
    const limit = Number(searchParams.get("limit")) || 20;
    const filters = searchParams.get("filters");

    if (!handle) {
      return NextResponse.json({
        products: [],
        filters: {},
        pageInfo: {},
        totalProducts: 0,
      });
    }

    const activeFilters = parseFilters(filters);
    const sortConfig = SORT_MAP[sort] || SORT_MAP.best_selling;

    const query = `
      query CollectionProducts(
        $handle: String!
        $first: Int!
        $after: String
        $sortKey: ProductCollectionSortKeys
        $reverse: Boolean
        $filters: [ProductFilter!]
      ) {
        collectionByHandle(handle: $handle) {
          products(
            first: $first
            after: $after
            sortKey: $sortKey
            reverse: $reverse
            filters: $filters
          ) {
            pageInfo { hasNextPage endCursor }
            filters {
              label
              type
              values { label count input }
            }
            edges {
              node {
                id
                title
                handle
                featuredImage { url }
                images(first: 20) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
                variants(first: 200) {
                  edges {
                    node {
                      id
                      price { amount }
                      compareAtPrice { amount }
                      availableForSale
                      quantityAvailable
                      selectedOptions { name value }
                      image {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const data = await shopifyStorefrontFetch(query, {
      handle,
      first: limit,
      after: cursor || null,
      sortKey: sortConfig.sortKey,
      reverse: sortConfig.reverse,
      filters: activeFilters,
    });

    const productsData = data?.collectionByHandle?.products;

    const products = await Promise.all(
      productsData.edges.map(async ({ node }) => {
        const variants = node.variants.edges.map(({ node: v }) => {
          const options = {};
          v.selectedOptions.forEach((o) => {
            options[o.name.toLowerCase()] = o.value;
          });

          return {
            id: v.id.split("/").pop(),
            size: options.size || null,
            color: options.color || null,
            price: Number(v.price.amount),
            compare_price: v.compareAtPrice
              ? Number(v.compareAtPrice.amount)
              : null,
            inStock:
              v.availableForSale === true &&
              Number(v.quantityAvailable || 0) > 0,
            image: v.image?.url || null,
            altText: v.image?.altText || "",
          };
        });

        let selectedVariant =
          variants.find((v) => v.inStock) || variants[0];

        const images = node.images?.edges?.map(({ node }) => ({
          url: node.url,
          altText: node.altText || "",
        })) || [];

        return {
          id: node.id.split("/").pop(),
          title: node.title,
          handle: node.handle,
          images,
          price: selectedVariant.price,
          compare_price: selectedVariant.compare_price,
          selectedColor: selectedVariant.color,
          colors: [...new Set(variants.map((v) => v.color).filter(Boolean))],
          image: selectedVariant.image || node.featuredImage?.url,
          altText: selectedVariant.altText || "",
          variants,
        };
      })
    );

    const processedFilters = {};
    productsData.filters.forEach((f) => {
      if (f.type === "PRICE_RANGE") return;
      processedFilters[f.label] = f.values.map((v) => ({
        label: v.label,
        count: v.count,
        input: v.input,
      }));
    });

    const totalProducts = await getCollectionTotalCount(handle);

    return NextResponse.json({
      products,
      filters: processedFilters,
      pageInfo: productsData.pageInfo,
      totalProducts,
    });
  } catch (err) {
    console.error("❌ Collection API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
