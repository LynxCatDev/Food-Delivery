import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { View } from 'react-native';
import { ProductButton } from './productButton';
import { ProductProps } from './product.interface';
import { FavoriteButton } from '../favorites/FavoriteButton';

export const ProductHeader = ({ product }: ProductProps) => {
  const { goBack } = useTypedNavigation();
  return (
    <View>
      <View className="flex-row justify-between mt-2">
        <ProductButton
          onPress={goBack}
          icon="chevron-left"
          iconSize={26}
          color="#555"
        />
        <FavoriteButton productId={product.id} />
      </View>
    </View>
  );
};
