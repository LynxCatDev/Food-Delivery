import { ICategory } from './category.interface';

export interface IProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category: ICategory;
  createdAt: string;
}
