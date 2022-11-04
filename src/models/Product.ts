import { Category } from "./Category";

export interface Product {
  productId: number;
  name: string;
  active: boolean;
  price: number;
  categoryId: number;
  photos: string[];
  discount: number;
  description?: string;
  freeShipping: boolean;
  stock: number;
}