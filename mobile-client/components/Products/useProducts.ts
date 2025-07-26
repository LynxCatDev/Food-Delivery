import { ProductsService } from '@/services/products/products.serve';
import { useQuery } from '@tanstack/react-query';

export const useProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['get products'],
    queryFn: () => ProductsService.getAll(),
    select: (data) => data.slice(0, 4),
  });

  return { products, isLoading };
};
