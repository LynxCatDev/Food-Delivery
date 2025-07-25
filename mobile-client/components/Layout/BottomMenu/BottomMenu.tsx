import { Text, View } from 'react-native';
import { NavigateType } from './bottom-menu.interface';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { menuItems } from './bottom-menu.data';
import MenuItem from './MenuItem';

interface BottomMenuProps {
  nav: NavigateType;
  currentRoute?: string;
}

const BottomMenu = ({ nav, currentRoute }: BottomMenuProps) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="pt-5 px-2 flx-row justify-between items-center w-full border-t border-t-solid border-t-[#bbb] bg-white"
      style={{
        paddingBottom: bottom + 20,
      }}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.path} item={item} nav={nav} />
      ))}
    </View>
  );
};

export default BottomMenu;
