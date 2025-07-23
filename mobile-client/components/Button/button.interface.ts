import { PressableProps } from 'react-native';

export interface Ibutton extends PressableProps {
  className?: string;
  children: React.ReactNode;
}
