/* eslint-disable jest/no-mocks-import */
/* eslint-disable jest/expect-expect */
import React from 'react';
import { render } from '@testing-library/react-native';

import Home from 'screens/Home';
import MockedNavigator from '../../../__mocks__/MockedNavigator';
import { Provider } from 'react-redux';
export * from '@testing-library/react-native';
import { configureStore, Store } from '@reduxjs/toolkit';
import rootReducer from '@store/rootReducer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

function customRender(
  ui: any,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  }: { initialState?: any; store?: Store } = {},
) {
  function Wrapper({ children }: { children: any }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

describe('HomeScreen', () => {
  it('should render home screen correctly', () => {
    customRender(<MockedNavigator component={Home} params={{}} />);
  });
  it('should render three buttons in main box', () => {
    const { getByTestId } = customRender(
      <MockedNavigator component={Home} params={{}} />,
    );
    const box = getByTestId('Box');
    expect(box.children.length).toBe(3);
  });
  it('should not show favorite heroes button', () => {
    const { queryByTestId } = customRender(
      <MockedNavigator component={Home} params={{}} />,
    );
    const favoriteButton = queryByTestId('Button.favoriteHeroes');
    expect(favoriteButton).toBeNull();
  });
  it('should show favorite heroes button', () => {
    const { getByTestId } = customRender(
      <MockedNavigator component={Home} params={{}} />,
      { initialState: { character: { favoriteHeroes: [{ hero: '' }] } } },
    );
    const favoriteButton = getByTestId('Button.favoriteHeroes');
    expect(favoriteButton).toBeDefined();
  });
});
