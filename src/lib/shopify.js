const SHOP = "luciraonline";

export async function shopifyStorefrontFetch(query, variables = {}) {
  if (!process.env.STOREFRONT_TOKEN) {
    throw new Error("STOREFRONT_TOKEN not configured");
  }

  const res = await fetch(
    `https://${SHOP}.myshopify.com/api/2024-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  const data = await res.json();

  if (data.errors) {
    console.error("GraphQL Errors:", data.errors);
    throw new Error(data.errors[0]?.message || "GraphQL error");
  }

  return data.data;
}

export async function shopifyAdminFetch(query, variables = {}) {
  if (!process.env.SHOPIFY_ADMIN_TOKEN) {
    throw new Error("SHOPIFY_ADMIN_TOKEN not configured");
  }

  const res = await fetch(
    `https://${SHOP}.myshopify.com/admin/api/2024-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  const data = await res.json();

  if (data.errors) {
    console.error("GraphQL Errors:", data.errors);
    throw new Error(data.errors[0]?.message || "GraphQL error");
  }

  return data.data;
}
