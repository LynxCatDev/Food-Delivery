import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useProfile } from '../profile/useProfile';
import { UserService } from '@/services/user/user.service';
import { ProductButton } from '../product/productButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FavoriteButtonProps {
  productId: string;
}

export const FavoriteButton = ({ productId }: FavoriteButtonProps) => {
  const { profile } = useProfile();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['toggle favorite'],
    mutationFn: () => UserService.toggleFavorite(productId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['get profile'],
      }),
  });

  if (!profile) return null;

  const isExists = profile.favorites.some(
    (favorite) => favorite.id === productId,
  );

  return (
    <ProductButton onPress={() => mutate()}>
      {isExists ? (
        <MaterialCommunityIcons name="heart" size={22} color="#DC3F41" />
      ) : (
        <MaterialCommunityIcons name="heart-outline" size={22} color="#555" />
      )}
    </ProductButton>
  );
};
