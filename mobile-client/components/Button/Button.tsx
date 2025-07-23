import { Pressable, Text } from 'react-native';
import { Ibutton } from './button.interface';
import cn from 'clsx';

export const Button = ({ children, className, ...props }: Ibutton) => {
  return (
    <Pressable
      className={cn(
        'self-center mt-3.5 bg-[#47AA52] w-full py-3 font-light rounded-lg',
        className,
      )}
      {...props}
    >
      <Text className="text-white text-center font-medium text-lg">
        {children}
      </Text>
    </Pressable>
  );
};
