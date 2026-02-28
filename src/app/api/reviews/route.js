import { NextResponse } from "next/server";
import { fetchNectorReviews } from "@/lib/nector";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return NextResponse.json(
      { error: "productId is required" },
      { status: 400 }
    );
  }

  const reviews = await fetchNectorReviews(productId);
  return NextResponse.json(reviews);
}