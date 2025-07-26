import { useAuth } from '@/hooks/useAuth';
import { AuthService } from '@/services/auth/auth.service';
import { IAuthFormData } from '@/types/auth.interface';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { UseFormReset } from 'react-hook-form';

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
  const { setUser } = useAuth();

  const { mutate: loginSync, isPending: isLoginLoading } = useMutation({
    mutationKey: ['login'],
    mutationFn: async ({ email, password }: IAuthFormData) =>
      AuthService.main('login', email, password),
    onSuccess: (data) => {
      reset();
      console.log(data, 'data');
      setUser(data.user);
    },
  });

  const { mutate: registerSync, isPending: isRegisterLoading } = useMutation({
    mutationKey: ['register'],
    mutationFn: async ({ email, password }: IAuthFormData) =>
      AuthService.main('reg', email, password),
    onSuccess: (data) => {
      reset();
      setUser(data.user);
    },
  });

  return useMemo(
    () => ({
      loginSync,
      registerSync,
      isLoading: isLoginLoading || isRegisterLoading,
    }),
    [isLoginLoading, isRegisterLoading],
  );
};
