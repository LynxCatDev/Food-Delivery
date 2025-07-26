import { IProduct } from '@/types/products.interface';
import { convertPrice } from '@/utils/convertPrice';
import { Text, View } from 'react-native';

interface ProductInfoProps {
  product: IProduct;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <View className="my-3">
      <Text className="font-semibold text-base">{product.name}</Text>
      <Text className="py-2 ">{product.category.name}</Text>
      <Text className="mt-1 font-normal text-center text-sm py-1 w-[55px] rounded-full bg-[#47AA52]">
        {convertPrice(product.price)}
      </Text>
    </View>
  );
};
