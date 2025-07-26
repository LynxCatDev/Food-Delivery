import { useGetAllCategories } from './useGetAllCategories';
import { Loader } from '../Loader/Loader';
import { View } from 'react-native';
import { Heading } from '../Heading/Heading';
import { CategoriesItem } from './CategoriesItem';

export const Categories = () => {
  const { categories, isLoading } = useGetAllCategories();
  return isLoading ? (
    <Loader />
  ) : (
    <View className="flex flex-column mt-5 mb-4 ">
      <Heading>Categories</Heading>

      <View className="flex-row justify-center mt-5">
        {categories?.map((category) => (
          <CategoriesItem category={category} key={category.id} />
        ))}
      </View>
    </View>
  );
};
