import HomeScreen from 'screens/Home';
/* PLOP_INJECT_IMPORT */
import AboutScreen from 'screens/About';
import { StackNavigationOptions } from '@react-navigation/stack';
import { IPeople } from 'src/interfaces/IPeople';

export type CommonStackParamList = {
  Home: undefined;

  /* PLOP_INJECT_TYPE */
  About: undefined;
};

const options: StackNavigationOptions = { gestureEnabled: false };

export const commonScreens = {
  Home: { component: HomeScreen, options },
  /* PLOP_INJECT_SCREEN */
  About: { component: AboutScreen },
};
