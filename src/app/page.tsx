import ProductList from "@/components/ProductsList";
import Filters from "@/components/Filters";
import FiltersBar from "@/components/FiltersBar";
import { Suspense } from "react";
import { SearchParamsType } from "@/types/searchParamsTypes";

type HomeProps = {
  searchParams: SearchParamsType;
};

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="w-full h-full flex justify-center px-6 sm:px-10 lg:px-20">
      <div className="max-w-big-screen h-full w-full py-8">
        <FiltersBar />
        <section className="flex gap-10">
          <div className="w-full max-w-[280px] hidden lg:block ">
            <Filters />
          </div>
          <div className="w-full">
            <Suspense fallback={<p>Loading...</p>}>
              <ProductList searchParams={searchParams} />
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
}
