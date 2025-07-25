import { Pressable } from 'react-native';
import { IMenuItem, NavigateType } from './bottom-menu.interface';
import { Feather } from '@expo/vector-icons';

interface MenuItemProps {
  item: IMenuItem;
  nav: NavigateType;
  currentRoute?: string;
}

const MenuItem = ({ item, nav, currentRoute }: MenuItemProps) => {
  const isActive = currentRoute === item.path;
  return (
    <Pressable onPress={() => nav(item.path)} className="items-center w-[20%]">
      <Feather
        name={item.icon}
        size={26}
        color={isActive ? '#47AA52' : '#374151'}
      />
    </Pressable>
  );
};

export default MenuItem;
