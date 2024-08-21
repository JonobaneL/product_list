import Skeleton from "./ui/Skeleton";

const ProductSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-10 w-full mb-2" />
      <Skeleton className="h-6 w-1/3 mb-8" />
      <Skeleton className="h-4 w-1/3 mb-4" />
      <Skeleton className="h-12 w-full" />
    </div>
  );
};

export default ProductSkeleton;
