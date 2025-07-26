import { ScrollView, View } from 'react-native';
import cn from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <View className={cn('h-full w-full bg-white mt-16 px-4', className)}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  );
};

export default Layout;
