import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --color--primary: #3a36db;
    --color--secondary: #0090ff;
    --color--danger: #ea3a3d;
    --color--success: #1ad598;
    --color--warning: #f9b959;
    --color--bg-primary: ${({ theme }) => theme.colors.bgPrimary};
    --color--bg-secondary: ${({ theme }) => theme.colors.bgSecondary};
    --color--text-primary: ${({ theme }) => theme.colors.textPrimary};
    --color--text-secondary: ${({ theme }) => theme.colors.textSecondary};
  }

  body {
    font-family: Helvetica, Arial, Roboto, sans-serif;
    background-color: var(--color--bg-primary);
    color: var(--color--text-primary);
  }

  button {
    margin: 0;
    border: 0;
    padding: 0;
    background-color: transparent;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  .container{
    max-width : 75rem;
    
    @media screen and (max-width: 64rem){
      max-width: 64rem;
    }

    @media screen and (max-width: 50rem){
      max-width: 50rem;
      padding: 0 1rem;
    }
  }

`;
