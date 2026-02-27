import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const handle = searchParams.get("handle");
    if (handle) {
      return NextResponse.redirect(`/collections/${handle}`, 307);
    }

    return NextResponse.json({ message: "Missing handle" }, { status: 400 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
