import { IRoute } from './navigation.types';
import Home from 'screens/home/Home';
import Auth from 'screens/auth/Auth';

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Auth',
    component: Auth,
  },
];
