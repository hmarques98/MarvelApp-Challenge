import React from 'react';
import { enableScreens } from 'react-native-screens';
import { FileLogger } from 'react-native-file-logger';
import { Provider } from 'react-redux';
import store from './src/config/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import Router from './src/config/navigation/Router';
import { theme } from './theme';
import { useNavigationMounting } from './src/config/navigation/RootNavigation';

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
