import Layout from '@/components/Layout/Layout';
import { Text, View } from 'react-native';
import { useCategory } from './useCategory';
import { Loader } from '@/components/Loader/Loader';
import Catalog from '@/components/Catalog/Catalog';

const Category = () => {
  const { category, products, isLoading } = useCategory();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      {category ? (
        <Catalog title={category.name} products={products || []} />
      ) : (
        <Text>Category not found</Text>
      )}
    </Layout>
  );
};

export default Category;
