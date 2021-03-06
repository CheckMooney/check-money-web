import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { defaultTheme } from './styles/Theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RegisterContextProvider } from './contexts/RegisterContext';
import { UserContextProvider } from 'contexts/UserContext';
import { SnackbarContextProvider } from 'contexts/SnackbarContext';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <SnackbarContextProvider>
          <UserContextProvider>
            <RegisterContextProvider>
              <GlobalStyle />
              <App />
            </RegisterContextProvider>
          </UserContextProvider>
        </SnackbarContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
