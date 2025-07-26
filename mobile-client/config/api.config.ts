import Constants from 'expo-constants';

export const SERVER_URL =
  Constants.expoConfig?.extra?.SERVER_URL ?? 'http://localhost:8081';
export const API_URL = `${SERVER_URL}/api`;

export const getAuthUrl = (path: string) => `/auth/${path}`;
export const getUsersUrl = (path: string) => `/users/${path}`;
export const getProductsUrl = (path: string) => `/products/${path}`;
export const getCategoriesUrl = (path: string) => `/categories/${path}`;
export const getPaymentUrl = (path: string) => `/payment/${path}`;
export const getOrdersUrl = (path: string) => `/orders/${path}`;
