import { getProduct } from "@/actions/productsAction";
import ProductImage from "@/components/ProductImage";
import ProductInfo from "@/components/ProductInfo";
import ProductSkeleton from "@/components/ProductSkeleton";
import BackNav from "@/components/ui/BackNav";
import { Suspense } from "react";

type ProductPageProps = {
  params: { product_slug: string };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.product_slug);
  if (!product) throw new Error("not found");
  return (
    <main className="w-full h-full flex justify-center px-6 sm:px-10 lg:px-20">
      <div className="max-w-big-screen h-full w-full py-10">
        <BackNav />
        <div className="flex gap-2 flex-col md:gap-10 md:flex-row lg:gap-20 ">
          <div className="w-full aspect-square flex items-center justify-center bg-white rounded-lg md:w-1/2 md:aspect-auto">
            <ProductImage
              src={product.image_url}
              name={"Розумна LED лампочка"}
            />
          </div>

          <div className="w-full pt-2 md:w-1/2">
            <Suspense fallback={<ProductSkeleton />}>
              <ProductInfo product_slug={params.product_slug} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
