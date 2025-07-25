import { createContext, ReactNode, useEffect, useState } from 'react';
import { IAuthContext, UserStateType } from './auth-provider.interface';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export const AuthContext = createContext({} as IAuthContext);

let ignore = SplashScreen.preventAutoHideAsync();

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserStateType>(null);

  useEffect(() => {
    let isMounted = true;

    const checkAccessToken = async () => {
      try {
      } catch {
      } finally {
        await SplashScreen.hideAsync();
      }

      let ignore = checkAccessToken();
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
