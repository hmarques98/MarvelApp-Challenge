import HomeScreen from 'screens/Home';
/* PLOP_INJECT_IMPORT */
import FavoriteHeroesScreen from 'screens/FavoriteHeroes';
import SearchForHeroScreen from 'screens/SearchForHero';
import ComicsScreen from 'screens/Comics';
import AboutScreen from 'screens/About';

import { StackNavigationOptions } from '@react-navigation/stack';

export type CommonStackParamList = {
  Home: undefined;

  /* PLOP_INJECT_TYPE */
  FavoriteHeroes: undefined;
  SearchForHero: undefined;
  Comics: { comicPath: string; name: string };
  About: undefined;
};

const options: StackNavigationOptions = { gestureEnabled: false };

export const commonScreens = {
  Home: { component: HomeScreen, options },
  /* PLOP_INJECT_SCREEN */
  FavoriteHeroes: { component: FavoriteHeroesScreen },
  SearchForHero: { component: SearchForHeroScreen },
  Comics: { component: ComicsScreen },
  About: { component: AboutScreen },
};
