type Book = {
  id: number;
  stripe_product_id?: string;
  stripe_price_id?: string;
  title: string;
  description: string;
  authorId: number;
  price: number;
};