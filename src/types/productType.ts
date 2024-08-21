export type ProductParams = {
  id: string;
  name: string;
  description: string;
  slug: string;
  category: CategoryParams;
  image_url: string;
  price: number;
};
type CategoryParams = {
  slug: string;
  name: string;
};
