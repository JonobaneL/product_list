import Image from "next/image";

type ImageProps = {
  src: string;
  name: string;
};

const ProductImage = ({ src, name }: ImageProps) => {
  return (
    <div className="relative w-[80%] h-[80%] aspect-square">
      <Image src={src} alt={name} fill className="object-contain" sizes="80%" />
    </div>
  );
};

export default ProductImage;
