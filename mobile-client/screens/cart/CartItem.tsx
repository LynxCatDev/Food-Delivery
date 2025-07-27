import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { ICartItem } from '@/types/cart.interface';
import { convertPrice } from '@/utils/convertPrice';
import { getMediaSource } from '@/utils/getMediaSource';
import { Image, Pressable, Text, View } from 'react-native';
import { CartActions } from './CartActions';

interface CartItemProps {
  item: ICartItem;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { navigate } = useTypedNavigation();
  return (
    <View className="flex-row mt-5">
      <Pressable
        onPress={() => navigate('Product', { slug: item.product.slug })}
      >
        <Image
          source={getMediaSource(item.product.image)}
          width={80}
          height={80}
        />
      </Pressable>
      <View className="ml-5 mt-2">
        <Text className="font-semibold text-xl">{item.product.name}</Text>
        <Text className="mt-1">{convertPrice(item.price)}</Text>
      </View>

      <CartActions item={item} />
    </View>
  );
};
