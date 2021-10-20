import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-base: ${({ theme }) => theme.colors.base};
    --color-danger: ${({ theme }) => theme.colors.danger};
    --color-success: ${({ theme }) => theme.colors.success};
    --color-warning: ${({ theme }) => theme.colors.warning};
  }

  body {
    font-family: Helvetica, Arial, Roboto, sans-serif;
    background-color: var(--color-base);
  }
`;
