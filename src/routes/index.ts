import { Home } from '~/components/pages';

export enum Routes {
  Home = '/'
}

export const routes = [
  {
    path: Routes.Home,
    component: Home
  }
];
