import { IProduct } from '@/types/products.interface';
import { request } from '../api/request';
import { getProductsUrl } from '@/config/api.config';

export const ProductsService = {
  getAll: async (searchValue?: string) => {
    return request<IProduct[]>({
      url: getProductsUrl(''),
      method: 'GET',
      params: searchValue ? { searchValue } : {},
    });
  },

  getBySlug: async (slug: string) => {
    return request<IProduct>({
      url: getProductsUrl(`/by-slug/${slug}`),
      method: 'GET',
    });
  },

  getByCategory: async (categorySlug: string) => {
    return request<IProduct>({
      url: getProductsUrl(`/by-category/${categorySlug}`),
      method: 'GET',
      data: { categorySlug },
    });
  },
};
