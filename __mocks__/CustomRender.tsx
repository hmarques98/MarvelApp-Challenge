import React from 'react'
import { configureStore, Store } from '@reduxjs/toolkit'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import rootReducer from '../src/config/redux/store/rootReducer'
import { theme } from '../src/core/theme'

export const customRender = (
  ui: any,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  }: { initialState?: any; store?: Store } = {},
) => {
  function Wrapper({ children }: { children: any }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    )
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react-native'
