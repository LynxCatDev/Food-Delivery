import { FeatherIconNamesType } from '@/types/icon.interface';
import { ReactNode } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import cn from 'clsx';
import { Feather } from '@expo/vector-icons';

interface IProductButtonProps extends PressableProps {
  children?: ReactNode;
  icon?: FeatherIconNamesType;
  iconSize?: number;
  color?: string;
  className?: string;
}

export const ProductButton = ({
  children,
  icon,
  iconSize,
  color,
  className,
  ...props
}: IProductButtonProps) => {
  return (
    <Pressable {...props}>
      <View
        className={cn(
          'items-center justify-center overflow-hidden bg-gray-200 p-3 rounded-full',
          className,
        )}
      >
        {children ? (
          children
        ) : (
          <Feather name={icon} size={iconSize} color={color} />
        )}
      </View>
    </Pressable>
  );
};
