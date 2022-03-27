import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { theme } from '../../core/theme';

import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import FavoriteHeroesScreen from './screens/FavoriteHeroes';
import SearchForHeroScreen from './screens/SearchForHero';
import ComicsScreen from './screens/Comics';

export type AppModuleStackProps = {
  Home: undefined;
  About: undefined;
  FavoriteHeroes: undefined;
  SearchForHero: undefined;
  Comics: { comicPath: string; name: string };
};

const options: StackNavigationOptions = { gestureEnabled: false };

export const screens = {
  Home: { component: HomeScreen, options },
  About: { component: AboutScreen },
  FavoriteHeroes: { component: FavoriteHeroesScreen },
  SearchForHero: { component: SearchForHeroScreen },
  Comics: { component: ComicsScreen },
};

export const screenOptions = {
  cardStyle: { backgroundColor: theme.colors.white },
  headerShown: false,
};

const Stack = createStackNavigator<AppModuleStackProps>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {Object.entries({
        ...screens,
      }).map(([name, props]) => {
        return (
          <Stack.Screen
            key={name}
            name={name as keyof AppModuleStackProps}
            {...props}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AppNavigation;
