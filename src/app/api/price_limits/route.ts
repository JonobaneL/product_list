import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ minPrice: 10, maxPrice: 550 });
}
