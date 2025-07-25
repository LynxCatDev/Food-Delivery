import { TypeRootStackParamList } from '@/screens/navigation/navigation.types';
import { FeatherIconNamesType } from '@/types/icon.interface';

export interface IMenuItem {
  icon: FeatherIconNamesType;
  path: keyof TypeRootStackParamList;
}

export type NavigateType = (screenName: keyof TypeRootStackParamList) => void;
