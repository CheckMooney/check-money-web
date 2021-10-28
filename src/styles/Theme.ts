import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f7f7f7',
    textPrimary: '#202020',
    textSecondary: '#333333',
    textThird: '#999999',
    borderPrimary: '#dddddd',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    bgPrimary: '#171717',
    bgSecondary: '#282828',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.89)',
    textThird: 'rgba(255,255,255,0.66)',
    borderPrimary: '#dddddd',
  },
};
