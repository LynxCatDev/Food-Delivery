import { ProductsService } from '@/services/products/products.serve';
import { useQuery } from '@tanstack/react-query';

export const useGetAllProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['get all products'],
    queryFn: () => ProductsService.getAll(),
    select: (data) => data,
  });

  return { products, isLoading };
};
