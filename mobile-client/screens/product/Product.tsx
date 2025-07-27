import { Image, View } from 'react-native';
import { useProduct } from './useProduct';
import { Loader } from '@/components/Loader/Loader';
import Layout from '@/components/Layout/Layout';
import { getMediaSource } from '@/utils/getMediaSource';
import { ProductHeader } from './ProductHeader';
import { ProductInfo } from './ProductInfo';
import { Button } from '@/components/Button/Button';

const Product = () => {
  const { product, isLoading } = useProduct();

  if (isLoading) return <Loader />;
  if (!product) return null;

  return (
    <Layout>
      <ProductHeader product={product} />

      <View className="items-center justify-center mt-4">
        <Image
          source={getMediaSource(product.image)}
          width={260}
          height={260}
        />
      </View>

      <ProductInfo product={product} />
      <Button className="mt-6">Add to cart</Button>
    </Layout>
  );
};

export default Product;
