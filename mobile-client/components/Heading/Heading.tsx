import { Text } from 'react-native';
import cn from 'clsx';

interface HeadingProps {
  children: React.ReactNode;
  isCentered?: boolean;
  className?: string;
}

export const Heading = ({
  children,
  isCentered = false,
  className,
}: HeadingProps) => {
  return (
    <Text
      className={cn(
        'text-black font-medium text-xl',
        isCentered && 'text-center',
        className,
      )}
    >
      {children}
    </Text>
  );
};
