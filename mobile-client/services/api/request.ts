import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Toast from 'react-native-toast-message';
import { errorCatch } from './error';
import instance from './interceptors';

export const request = async <T>(config: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse<T>) => response.data;

  const onError = (error: AxiosError<T>) => {
    Toast.show({
      type: 'error',
      text1: 'Request Error',
      text2: errorCatch(error),
    });

    return Promise.reject(error);
  };

  return instance(config).then(onSuccess).catch(onError);
};
