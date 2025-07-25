import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeRootStackParamList } from './navigation.types';
import { routes } from './routes';
import { useAuth } from '@/hooks/useAuth';
import Auth from '../auth/Auth';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigation = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      {user ? (
        routes.map((route, i) => <Stack.Screen key={i} {...route} />)
      ) : (
        <Stack.Screen name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default PrivateNavigation;
