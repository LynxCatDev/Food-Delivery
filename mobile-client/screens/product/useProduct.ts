import { useTypedRoute } from '@/hooks/useTypedRoute';
import { ProductsService } from '@/services/products/products.serve';
import { useQuery } from '@tanstack/react-query';

export const useProduct = () => {
  const { params } = useTypedRoute<'Product'>();
  const { data: product, isLoading } = useQuery({
    queryKey: ['get product by slug', params.slug],
    queryFn: () => ProductsService.getBySlug(params.slug),
  });

  return { product, isLoading };
};
