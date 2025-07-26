import { CategoriesService } from '@/services/categories/categories.service';
import { ICategory } from '@/types/category.interface';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCategories = () => {
  const { data: categories, isLoading } = useQuery<ICategory[]>({
    queryKey: ['get categories'],
    queryFn: () => CategoriesService.getAll(),
    select: (data) => data,
  });

  return { categories, isLoading };
};
