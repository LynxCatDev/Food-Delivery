import { View } from 'react-native';
import { useProducts } from './useProducts';
import { Loader } from '../Loader/Loader';
import Catalog from '../Catalog/Catalog';

export const Products = () => {
  const { products, isLoading } = useProducts();
  return isLoading ? (
    <Loader />
  ) : (
    <Catalog title="Products" products={products || []} />
  );
};
