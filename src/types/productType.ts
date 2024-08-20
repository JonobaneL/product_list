export type ProductParams = {
  id: string;
  name: string;
  description: string;
  slug: string;
  category: CategoryParams;
  image_url: string;
  price: number;
};
export type CategoryParams = {
  category_slug: string;
  name: string;
};
