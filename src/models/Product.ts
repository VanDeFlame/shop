import { Category } from "./Category";

export interface Product {
  productId: number;
  name: string;
  active: boolean;
  price: number;
  categoryId: number;
  photo: string;
  discount: number;
  freeShipping: boolean;
  stock: number;
}