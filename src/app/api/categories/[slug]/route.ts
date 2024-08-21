import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";
import { ParamType } from "@/types/paramsTypes";
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const filePath = join(process.cwd(), "src/data", "categories.json");
  const data = JSON.parse(readFileSync(filePath, "utf-8")) as ParamType[];
  const category = data.find((item) => item.slug == params.slug);
  return NextResponse.json(category);
}
