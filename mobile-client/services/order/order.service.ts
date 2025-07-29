import { IOrder } from '@/types/order.interface';
import { request } from '../api/request';
import { getOrdersUrl } from '@/config/api.config';

type TypeData = {
  items: {
    quantity: number;
    price: number;
    productId: string;
  }[];
};

export const OrderService = {
  getAll: async () => {
    return request<IOrder[]>({
      url: getOrdersUrl(''),
      method: 'GET',
    });
  },

  getByUserId: async () => {
    return request<IOrder[]>({
      url: getOrdersUrl('/by-user'),
      method: 'GET',
    });
  },

  placeOrder: async (data: TypeData) => {
    return request<{ clientSecret: string }>({
      url: getOrdersUrl(''),
      method: 'POST',
      data,
    });
  },
};
