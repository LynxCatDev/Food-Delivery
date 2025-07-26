import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { IProduct } from '@/types/products.interface';
import { getMediaSource } from '@/utils/getMediaSource';
import { Image, Pressable, View } from 'react-native';
import { ProductInfo } from './CatalogInfo';

interface CatalogItemProps {
  product: IProduct;
}

export const CatalogItem = ({ product }: CatalogItemProps) => {
  const { navigate } = useTypedNavigation();
  return (
    <View className="rounded-lg flex-col mb-4">
      <Pressable
        onPress={() => navigate('Product', { slug: product.slug })}
        className="bg-gray-100 rounded-xl relative overflow-hidden p-5 flex items-center justify-center"
      >
        <Image
          source={getMediaSource(product.image)}
          width={130}
          height={130}
        />
      </Pressable>

      <ProductInfo product={product} />
    </View>
  );
};
