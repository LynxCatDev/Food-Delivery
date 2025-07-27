import { Image, View } from 'react-native';
import { useProduct } from './useProduct';
import { Loader } from '@/components/Loader/Loader';
import Layout from '@/components/Layout/Layout';
import { getMediaSource } from '@/utils/getMediaSource';
import { ProductHeader } from './ProductHeader';
import { ProductInfo } from './ProductInfo';
import { Button } from '@/components/Button/Button';
import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';

const Product = () => {
  const { product, isLoading } = useProduct();
  const { addToCart, removeFromCart } = useActions();
  const { items } = useCart();
  const currentElement = items.find((item) => item.product.id === product?.id);

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
      <Button
        onPress={() =>
          currentElement
            ? removeFromCart({ id: currentElement.id })
            : addToCart({
                product,
                quantity: 1,
                price: product.price,
              })
        }
        className="mt-6"
      >
        {currentElement ? 'Remove from cart' : 'Add to cart'}
      </Button>
    </Layout>
  );
};

export default Product;
