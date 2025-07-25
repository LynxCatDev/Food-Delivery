import { TypeRootStackParamList } from 'screens/navigation/navigation.types';
import { NavigationProp } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';

export const useTypedNavigation = () =>
  useNavigation<NavigationProp<TypeRootStackParamList>>();
