import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";
import { ParamType } from "@/types/paramsTypes";
export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const productName = params.name;
  if (!productName) return NextResponse.json([]);
  const filePath = join(process.cwd(), "src/data", "products.json");
  const data = JSON.parse(readFileSync(filePath, "utf-8")) as ParamType[];
  const products = data.filter((item) =>
    item.name.toLowerCase().includes(productName.toLowerCase())
  );
  return NextResponse.json(products);
}
