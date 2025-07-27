import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';
import { ICartItem } from '@/types/cart.interface';
import { AntDesign } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

interface CartActionsProps {
  item: ICartItem;
}

export const CartActions = ({ item }: CartActionsProps) => {
  const { changeQuantity } = useActions();
  const { items } = useCart();
  const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity;
  return (
    <View className="mt-4 flex-row items-center gap-x-4">
      <Pressable
        onPress={() => changeQuantity({ id: item.id, type: 'minus' })}
        disabled={quantity === 1}
      >
        <AntDesign name="minus" size={18} />
      </Pressable>

      <Text>Quantity</Text>

      <Pressable onPress={() => changeQuantity({ id: item.id, type: 'plus' })}>
        <AntDesign name="plus" size={18} />
      </Pressable>
    </View>
  );
};
