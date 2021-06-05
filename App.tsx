import React from 'react';
import { useNavigationMounting } from 'navigation/RootNavigation';
import 'localization';
import Router from 'navigation/Router';
import { enableScreens } from 'react-native-screens';
import { FileLogger } from 'react-native-file-logger';
import useNetworkError from 'hooks/useNetworkError';
import useStartupTime from 'hooks/useStartupTime';
import useAppState from 'react-native-appstate-hook';
import { Provider } from 'react-redux';
import store from './src/store';
import { QueryClient, QueryClientProvider } from 'react-query';

enableScreens();
FileLogger.configure({
  maximumFileSize: 1024 * 1024 * 5, // 5MB,
  maximumNumberOfFiles: 3,
});

const queryClient = new QueryClient();

const App = () => {
  useNavigationMounting();

  useStartupTime();

  useNetworkError();

  useAppState({
    onChange: (newAppState) =>
      console.warn('App state changed to ', newAppState),
    onForeground: () => console.warn('App went to Foreground'),
    onBackground: () => console.warn('App went to background'),
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
