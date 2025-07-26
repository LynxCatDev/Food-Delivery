import { IProduct } from '@/types/products.interface';

export interface ICatalog {
  title?: string;
  products: IProduct[];
}
