import { IUser } from '@/types/user.interface';
import { request } from '../api/request';
import { getUsersUrl } from '@/config/api.config';

export const UserService = {
  getProfile: async () => {
    return request<IUser>({
      url: getUsersUrl('/profile'),
      method: 'GET',
    });
  },

  toggleFavorite: async (productId: string) => {
    return request<IUser>({
      url: getUsersUrl(`/profile/favorites/${productId}`),
      method: 'PATCH',
    });
  },
};
