import { IProduct } from './products.interface';
export interface ICartItem {
  id: string;
  product: IProduct;
  quantity: number;
  price: number;
}
