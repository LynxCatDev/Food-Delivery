import { TypeRootStackParamList } from '@/screens/navigation/navigation.types';
import { RouteProp, useRoute } from '@react-navigation/native';

export const useTypedRoute = <N extends keyof TypeRootStackParamList>() =>
  useRoute<RouteProp<TypeRootStackParamList, N>>();
