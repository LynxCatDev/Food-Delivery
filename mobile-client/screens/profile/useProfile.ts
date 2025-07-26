import { UserService } from '@/services/user/user.service';
import { useQuery } from '@tanstack/react-query';

export const useProfile = () => {
  const { data: profile } = useQuery({
    queryKey: ['get profile'],
    queryFn: () => UserService.getProfile(),
  });

  return { profile };
};
