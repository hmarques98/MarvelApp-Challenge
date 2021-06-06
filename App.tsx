import React from 'react';
import { useNavigationMounting } from 'navigation/RootNavigation';
import 'localization';
import Router from 'navigation/Router';
import { enableScreens } from 'react-native-screens';
import { FileLogger } from 'react-native-file-logger';
import { Provider } from 'react-redux';
import store from './src/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from 'theme';
import { ThemeProvider } from 'styled-components';

enableScreens();
FileLogger.configure({
  maximumFileSize: 1024 * 1024 * 5, // 5MB,
  maximumNumberOfFiles: 3,
});

const queryClient = new QueryClient();

const App = () => {
  useNavigationMounting();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
