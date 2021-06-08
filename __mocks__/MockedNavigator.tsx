import React, { ComponentType } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { log } from '@utils/console';

const Stack = createStackNavigator();

type Props = {
  component: ComponentType<any>;
  params: any;
};
const MockedNavigator = ({ component, params = {} }: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={component.name}
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
