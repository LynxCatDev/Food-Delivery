import {
  NavigationContainer,
  useNavigation,
  useNavigationContainerRef,
} from '@react-navigation/native';
import PrivateNavigation from './PrivateNavigation';
import BottomMenu from '@/components/Layout/BottomMenu/BottomMenu';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useCheckAuth } from '@/providers/auth/useCheckAuth';

const Navigation = () => {
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined,
  );
  const { user } = useAuth();
  const navRef = useNavigationContainerRef();

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name);
    const listener = navRef.addListener('state', () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name),
    );

    return () => {
      navRef.removeListener('state', listener);
    };
  }, []);

  useCheckAuth(currentRoute);

  return (
    <NavigationContainer ref={navRef}>
      <PrivateNavigation />
      {user && currentRoute && (
        <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
