import { ICartItem } from './cart.interface';
import { IUser } from './user.interface';

export interface IOrder {
  id: string;
  createAt: string;
  items: ICartItem[];
  user: IUser;
  total: number;
}
