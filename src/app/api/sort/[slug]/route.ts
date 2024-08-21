import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";
import { SortOptionType } from "@/types/paramsTypes";
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const filePath = join(process.cwd(), "public", "sort-options.json");
  const data = JSON.parse(readFileSync(filePath, "utf-8")) as SortOptionType[];
  const category = data.find((item) => item.value == params.slug);
  return NextResponse.json(category);
}
