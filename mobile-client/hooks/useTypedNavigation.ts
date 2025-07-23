import { TypeRootStackParamList } from '@/navigation/navigation.types';
import { NavigationProp } from '@react-navigation/core';
import { useNavigation } from 'expo-router';

export const useTypedNavigation = () =>
  useNavigation<NavigationProp<TypeRootStackParamList>>();
