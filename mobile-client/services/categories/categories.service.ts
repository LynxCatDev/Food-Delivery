import { ICategory } from '@/types/category.interface';
import { request } from '../api/request';
import { getCategoriesUrl } from '@/config/api.config';

export const CategoriesService = {
  getAll: async () => {
    return request<ICategory[]>({
      url: getCategoriesUrl(''),
      method: 'GET',
    });
  },

  getBySlug: async (slug: string) => {
    return request<ICategory>({
      url: getCategoriesUrl(`/by-slug/${slug}`),
      method: 'GET',
    });
  },
};
