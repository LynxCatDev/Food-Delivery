import { createContext, ReactNode, useEffect, useState } from 'react';
import { IAuthContext, UserStateType } from './auth-provider.interface';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  getAccessToken,
  getUserFromStorage,
} from '@/services/auth/auth.helper';

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<UserStateType>(null);

  useEffect(() => {
    let isMounted = true;

    SplashScreen.preventAutoHideAsync();

    const checkAccessToken = async () => {
      try {
        const accessToken = await getAccessToken();

        if (accessToken) {
          const user = await getUserFromStorage();

          if (isMounted) {
            setUser(user);
          }
        }
      } catch {
      } finally {
        await SplashScreen.hideAsync();
      }

      checkAccessToken();
    };

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
