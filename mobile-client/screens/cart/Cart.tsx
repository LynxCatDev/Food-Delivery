import { Button } from '@/components/Button/Button';
import { Heading } from '@/components/Heading/Heading';
import Layout from '@/components/Layout/Layout';
import { useCart } from '@/hooks/useCart';
import { convertPrice } from '@/utils/convertPrice';
import { Text, View } from 'react-native';
import { CartItem } from './CartItem';
import { useCheckout } from './useCheckout';

const Cart = () => {
  const { items, total } = useCart();
  const { onCheckout } = useCheckout();
  return (
    <Layout>
      <Heading>Cart</Heading>

      {!!items.length ? (
        items.map((item) => <CartItem key={item.product.id} item={item} />)
      ) : (
        <Text className="mt-2">Product not found</Text>
      )}

      {!items.length && (
        <View className="bottom-8 absolute w-[90%] mx-5">
          <Text className="font-bold text-xl">
            Total: {convertPrice(total)}
          </Text>

          <Button
            onPress={() => {
              onCheckout;
            }}
          >
            Place order
          </Button>
        </View>
      )}
    </Layout>
  );
};

export default Cart;
