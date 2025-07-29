import { IRoute } from './navigation.types';
import Home from 'screens/home/Home';
import Auth from 'screens/auth/Auth';
import Search from '../search/Search';
import Explorer from '../explorer/Explorer';
import Profile from '../profile/Profile';
import Cart from '../cart/Cart';
import Category from '../category/Category';
import Product from '../product/Product';
import Thanks from '../thanks/Thanks';

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Auth',
    component: Auth,
  },
  {
    name: 'Search',
    component: Search,
  },
  {
    name: 'Explorer',
    component: Explorer,
  },
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'Cart',
    component: Cart,
  },
  {
    name: 'Category',
    component: Category,
  },
  {
    name: 'Product',
    component: Product,
  },
  {
    name: 'Thanks',
    component: Thanks,
  },
];
