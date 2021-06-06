import React from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from 'navigation/RootNavigation';

import { commonScreens, CommonStackParamList, splashScreen } from 'screens';
import { theme } from '../../theme';

const screenOptions = {
  cardStyle: { backgroundColor: theme.colors.white },
  headerShown: false,
};

type ParamList = CommonStackParamList;
export const Stack = createStackNavigator<ParamList>();

const linking: LinkingOptions = {
  prefixes: ['MarvelApp://'],
  config: {
    screens: {},
  },
};

export default function Router() {
  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => {}}>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={screenOptions}>
          {Object.entries({
            ...commonScreens,
          }).map(([name, props]) => {
            return (
              <Stack.Screen
                key={name}
                name={name as keyof ParamList}
                {...props}
              />
            );
          })}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
