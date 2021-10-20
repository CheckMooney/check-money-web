import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      base: string;
      danger: string;
      success: string;
      warning: string;
    };
  }
}
