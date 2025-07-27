import { useTypedRoute } from '@/hooks/useTypedRoute';
import { CategoriesService } from '@/services/categories/categories.service';
import { ProductsService } from '@/services/products/products.serve';
import { useQuery } from '@tanstack/react-query';

export const useCategory = () => {
  const { params } = useTypedRoute<'Category'>();
  const { data: category, isLoading: isCategoryLoading } = useQuery({
    queryKey: ['get category by slug', params.slug],
    queryFn: () => CategoriesService.getBySlug(params.slug),
  });

  const categoryId = category?.id || '';
  const { data: products, isLoading: isProductLoading } = useQuery({
    queryKey: ['get products by category', params.slug],
    queryFn: () => ProductsService.getByCategory(params.slug),
    enabled: !!categoryId,
  });

  return {
    category,
    products,
    isLoading: isCategoryLoading || isProductLoading,
  };
};
