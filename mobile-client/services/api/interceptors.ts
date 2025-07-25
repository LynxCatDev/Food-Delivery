import { API_URL } from '@/config/api.config';
import axios from 'axios';
import { deleteTokensFromStorage, getAccessToken } from '../auth/auth.helper';
import { errorCatch } from './error';
import { getNewTokens } from './helper';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._retry = true;
      try {
        await getNewTokens();
        return instance(originalRequest);
      } catch (e) {
        if (errorCatch(e) === 'jwt expired') {
          await deleteTokensFromStorage();
        }
      }
    }

    throw error;
  },
);

export default instance;
