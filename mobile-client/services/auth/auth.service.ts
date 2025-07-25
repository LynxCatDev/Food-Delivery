import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface';
import { request } from '../api/request';
import { getAuthUrl } from '@/config/api.config';
import { deleteTokensFromStorage, saveUserToStorage } from './auth.helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthService = {
  main: async (variant: 'reg' | 'login', email: string, password: string) => {
    const response = await request<IAuthResponse>({
      url: getAuthUrl(`${variant === 'reg' ? 'register' : 'login'}`),
      method: 'POST',
      data: { email, password },
    });

    if (response.accessToken) {
      await saveUserToStorage(response);
    }

    return response;
  },

  logout: async () => {
    await deleteTokensFromStorage();
    await AsyncStorage.removeItem(EnumAsyncStorage.USER);
  },
};
