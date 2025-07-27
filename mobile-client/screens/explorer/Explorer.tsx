import Layout from '@/components/Layout/Layout';
import { Text, View } from 'react-native';
import { useGetAllProducts } from './useGetAllProducts';
import { Loader } from '@/components/Loader/Loader';
import Catalog from '@/components/Catalog/Catalog';

const Explorer = () => {
  const { products, isLoading } = useGetAllProducts();
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <Catalog title="Explorer" products={products || []} />
      )}
    </Layout>
  );
};

export default Explorer;
