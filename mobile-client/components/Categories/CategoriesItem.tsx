import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { ICategory } from '@/types/category.interface';
import { getMediaSource } from '@/utils/getMediaSource';
import { Image, Pressable, Text } from 'react-native';

interface CategoriesItemProps {
  category: ICategory;
}

export const CategoriesItem = ({ category }: CategoriesItemProps) => {
  const { navigate } = useTypedNavigation();
  return (
    <Pressable
      onPress={() => navigate('Category', { slug: category.slug })}
      className="rounded-xl bg-gray-100 p-5 mx-2"
    >
      <Image
        source={getMediaSource(category.image)}
        className="w-10 h-8 mb-2 p-3"
        style={{
          resizeMode: 'cover',
        }}
      />
      <Text className="text-xs text-center">{category.name}</Text>
    </Pressable>
  );
};
