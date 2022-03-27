import React from 'react'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppNavigation from '../../domain/app/navigation'
import { theme } from '../../core/theme'

import { navigationRef } from './RootNavigation'

export const screenOptions = {
  cardStyle: { backgroundColor: theme.colors.white },
  headerShown: false,
}

const linking: LinkingOptions = {
  prefixes: ['MarvelApp://'],
  config: {
    screens: {},
  },
}

const Router = () => {
  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => {}}
    >
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default Router
