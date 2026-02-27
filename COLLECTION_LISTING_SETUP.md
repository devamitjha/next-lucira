# Collection Listing Page Implementation

## Overview
A complete product collection listing page has been implemented in the Next.js Lucira project using the Shopify Storefront API. The implementation includes:

- ✅ Server-side product fetching with Shopify GraphQL
- ✅ Client-side filtering and sorting
- ✅ Pagination with "Load More" button
- ✅ Responsive design (mobile + desktop)
- ✅ Product cards with color variants
- ✅ Filter sheet for mobile devices
- ✅ Sort dropdown for multiple options

---

## Architecture

### 1. **Shopify API Client** (`src/lib/shopify.js`)
Provides two main functions:
- `shopifyStorefrontFetch()` - Public Storefront API (product queries)
- `shopifyAdminFetch()` - Admin API (product counts)

### 2. **API Routes**

#### `/api/collection?handle=...` (Storefront Query)
Fetches paginated products from a collection with filters and sorting.

**Query Parameters:**
- `handle` - Collection slug (required)
- `limit` - Products per page (default: 20)
- `cursor` - Pagination cursor
- `sort` - Sort key: `best_selling`, `price_low_high`, `price_high_low`, `az`
- `filters` - JSON string of selected filters

**Response:**
```json
{
  "products": [...],
  "filters": {
    "Color": [{"label": "Red", "count": 5, "input": "..."}],
    "Size": [...]
  },
  "pageInfo": {
    "hasNextPage": true,
    "endCursor": "..."
  },
  "totalProducts": 42
}
```

#### `/api/collection/filters?handle=...` (Filters Only)
Lightweight endpoint to fetch available filters for a collection (10 min cache).

### 3. **Client Page** (`src/app/products/page.js`)
Main collection listing page with:
- Filter sidebar (desktop)
- Filter sheet (mobile via `Sheet` component)
- Sort dropdown
- Product grid (responsive columns)
- Infinite scroll with "Load More" button
- Applied filter counter

### 4. **ProductCard Component** (`src/components/product/ProductCard.jsx`)
Displays individual products with:
- Product image with hover zoom
- Title and price
- Discount badge (if applicable)
- Stock status
- Color swatches (interactive)
- "Add to Cart" button

### 5. **API Helpers** (`src/lib/api.js`)
New export functions:
- `fetchCollectionProducts()` - Fetch products with filters/sort
- `fetchCollectionFilters()` - Fetch filters for a collection

### 6. **Navigation** (`src/components/header/Navbar.jsx`)
Updated navbar items to link to collection pages:
```javascript
<Link href={`/products?handle=${menu.slug}`}>
  {menu.label}
</Link>
```

---

## Usage

### Access a Collection
Navigate to `/products?handle=collection-slug` or click any navbar category.

**Example URLs:**
- `/products?handle=rings`
- `/products?handle=earrings`
- `/products?handle=engagement-bridal`

### Query Products Programmatically
```javascript
import { fetchCollectionProducts } from "@/lib/api";

const data = await fetchCollectionProducts({
  handle: "rings",
  limit: 20,
  sort: "price_low_high",
  filters: JSON.stringify({ "Color": [{ label: "Gold", input: "..." }] })
});
```

### Fetch Filters
```javascript
import { fetchCollectionFilters } from "@/lib/api";

const { filters } = await fetchCollectionFilters("rings");
```

---

## Shopify GraphQL Queries

### CollectionProducts Query
Fetches products with pagination, sorting, filtering:
```graphql
query CollectionProducts(
  $handle: String!
  $first: Int!
  $after: String
  $sortKey: ProductCollectionSortKeys
  $reverse: Boolean
  $filters: [ProductFilter!]
)
```

Includes:
- Product title, handle, featured image
- All variants with price, availability, options
- Product & variant images
- Compare-at prices

### CollectionProductCount Query
Fetches total product count per collection (via Admin API).

---

## Features

### Sorting
- **Best Selling** - Default sort
- **Price: Low to High**
- **Price: High to Low**
- **A to Z** (by title)

### Filtering
Filters are dynamically fetched from Shopify and displayed as:
- Desktop: Left sidebar checkboxes
- Mobile: Bottom sheet with same UI

Each filter option shows:
- Label (e.g., "Red Gold", "Size 6")
- Count of products with that variant
- Checkbox for selection

### Pagination
- Initial load: 20 products
- "Load More" button fetches next page
- Cursor-based pagination (Shopify native)
- Shows product count (e.g., "Showing 40 of 150")

### Responsive Design
- **Mobile:** Single column, mobile filter sheet, compact toolbar
- **Tablet:** 2-column grid
- **Desktop:** 3-column grid + filter sidebar

---

## Environment Variables Required

```env
NEXT_PUBLIC_STOREFRONT_TOKEN=your_storefront_token
SHOPIFY_ADMIN_TOKEN=your_admin_token
```

Currently hardcoded in `src/lib/shopify.js`:
```javascript
const SHOP = "luciraonline";
```

---

## Component Dependencies

- `Button` - From UI library
- `Sheet/SheetContent/SheetHeader/SheetTitle/SheetTrigger` - From UI library
- `Checkbox` - From UI library
- `Input` - From UI library
- `Loader` - Custom component at `src/components/common/Loader.jsx`
- `Header` - Custom component
- `ProductCard` - Custom component

---

## Future Enhancements

1. **Price Range Slider** - Add min/max price filter
2. **Search** - Integrate search functionality
3. **Wishlist** - Add to wishlist from card
4. **Reviews** - Display product ratings
5. **Quick View** - Modal preview without navigation
6. **Save Filters** - Remember user's filter selections
7. **URL State** - Persist filters/sort in URL query params
8. **SEO** - Generate dynamic meta tags per collection

---

## Testing Checklist

- [ ] Load `/products?handle=rings` - should show ring products
- [ ] Click a category in navbar - should navigate to that collection
- [ ] Select a filter - products should update
- [ ] Change sort option - products should reorder
- [ ] Click "Load More" - should append next page
- [ ] Click product card - should navigate to product detail
- [ ] Click color swatch - should update variant preview
- [ ] Test on mobile - filters should show in sheet

---

## File Structure

```
src/
├── app/
│   ├── products/
│   │   └── page.js                 # Collection listing page
│   └── api/
│       └── collection/
│           ├── route.js            # Products endpoint
│           └── filters/route.js    # Filters endpoint
├── components/
│   ├── product/
│   │   ├── ProductCard.jsx         # Product card component
│   │   └── ...
│   ├── header/
│   │   └── Navbar.jsx              # Category navigation
│   └── ...
├── lib/
│   ├── shopify.js                  # Shopify API client
│   ├── api.js                      # Fetch helpers
│   └── ...
└── hooks/
    └── useCollectionFilters.js     # Custom hook

server/ (Express - if integrated)
├── routes/
│   ├── collection.js
│   ├── collectionFilters.js
│   └── collectionFilters-varient.js
└── utils/
    └── shopifyStorefrontClient.js
```

---

## Notes

- The Expo app (`expo-app/lucira-app`) has similar collection logic in `server/routes/collection.js` - this Next.js version mirrors that pattern for web.
- Filters are cached for 10 minutes on the server to reduce Shopify API calls.
- Product counts are cached separately (10 min TTL).
- All Shopify GraphQL calls use API version `2024-10`.
