import ProductList from "@/components/ProductsList";
import Accordion from "@/components/ui/Accordion";

import CategoryFilters from "@/components/CategoryFilters";
import PriceFilters from "@/components/PriceFilters";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center px-20">
      <div className="max-w-big-screen h-full w-full py-8">
        <section className="flex gap-10">
          <div className="w-full max-w-[280px]">
            <Accordion header="Категорії">
              <div className="p-2">
                <CategoryFilters />
              </div>
            </Accordion>
            <Accordion header="Ціна" defaultOpen={true}>
              <div className="p-2">
                <PriceFilters />
              </div>
            </Accordion>
          </div>
          <div className="w-full">
            <ProductList />
          </div>
        </section>
      </div>
    </main>
  );
}
