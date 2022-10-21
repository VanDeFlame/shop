import { Category } from "./Category";

export interface Product {
  productId: number;
  name: string;
  active: boolean;
  price: number;
  category: Category;
  categoryId: number;
  photo: string;
  discount: number;
  shippingCost: number;
}