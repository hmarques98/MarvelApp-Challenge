import HomeScreen from 'screens/Home';
/* PLOP_INJECT_IMPORT */
import SearchScreen from 'screens/Search';
import ComicsScreen from 'screens/Comics';
import AboutScreen from 'screens/About';

import { StackNavigationOptions } from '@react-navigation/stack';

export type CommonStackParamList = {
  Home: undefined;

  /* PLOP_INJECT_TYPE */
  Search: undefined;
  Comics: undefined;
  About: undefined;
};

const options: StackNavigationOptions = { gestureEnabled: false };

export const commonScreens = {
  Home: { component: HomeScreen, options },
  /* PLOP_INJECT_SCREEN */
  Search: { component: SearchScreen },
  Comics: { component: ComicsScreen },
  About: { component: AboutScreen },
};
