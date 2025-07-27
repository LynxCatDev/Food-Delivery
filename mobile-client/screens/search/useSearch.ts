import { ProductsService } from '@/services/products/products.serve';
import { useQuery } from '@tanstack/react-query';
import { useSearchForm } from './useSearchForm';

export const useSearch = () => {
  const { searchValue, debouncedSearch, control } = useSearchForm();
  const { data: products, isLoading } = useQuery({
    queryKey: ['search products', debouncedSearch],
    queryFn: () => ProductsService.getAll(debouncedSearch),
    enabled: !!debouncedSearch,
  });

  return { products, isLoading, control, searchValue };
};
