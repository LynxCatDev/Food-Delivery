import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeRootStackParamList } from './navigation.types';
import { routes } from './routes';

const Navigation = () => {
  const Stack = createNativeStackNavigator<TypeRootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          contentStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        {routes.map((route, i) => (
          <Stack.Screen key={i} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
