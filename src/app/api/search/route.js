import { NextResponse } from "next/server";
import client from "@/lib/opensearch";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] });
    }

    let must = [
      {
        multi_match: {
          query: query,
          fields: ["title^3", "description", "tags"],
          type: "best_fields",
          fuzziness: "AUTO",
        },
      },
    ];

    let filter = [];

    // Price intent detection
    const lowerQuery = query.toLowerCase();
    
    // Pattern for "under 20k", "below 5000"
    const underMatch = lowerQuery.match(/(under|below|less than|under\s?than)\s?(\d+)\s?(k)?/i);
    // Pattern for "above 100k", "more than 5000", "greater than 10k"
    const aboveMatch = lowerQuery.match(/(above|more than|greater than|over)\s?(\d+)\s?(k)?/i);

    if (underMatch) {
      let amount = parseInt(underMatch[2]);
      if (underMatch[3] && underMatch[3].toLowerCase() === 'k') amount *= 1000;

      if (!isNaN(amount)) {
        filter.push({ range: { price_amount: { lte: amount } } });
        const cleanQuery = query.replace(underMatch[0], "").trim();
        if (cleanQuery) must[0].multi_match.query = cleanQuery;
        else must = [{ match_all: {} }];
      }
    } else if (aboveMatch) {
      let amount = parseInt(aboveMatch[2]);
      if (aboveMatch[3] && aboveMatch[3].toLowerCase() === 'k') amount *= 1000;

      if (!isNaN(amount)) {
        filter.push({ range: { price_amount: { gte: amount } } });
        const cleanQuery = query.replace(aboveMatch[0], "").trim();
        if (cleanQuery) must[0].multi_match.query = cleanQuery;
        else must = [{ match_all: {} }];
      }
    }

    const response = await client.search({
      index: "products",
      body: {
        size: 10,
        query: {
          bool: {
            must,
            filter,
          },
        },
      },
    });

    const results = response.body.hits.hits.map((hit) => ({
      id: hit._id,
      title: hit._source.title,
      handle: hit._source.handle,
      image: hit._source.image,
      price: hit._source.price_display,
      comparePrice: hit._source.compare_price_display,
    }));

    return NextResponse.json({ results });
  } catch (error) {
    console.error("OpenSearch Search error:", error);
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
