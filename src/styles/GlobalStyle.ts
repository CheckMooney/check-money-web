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
    --color--text-third: ${({ theme }) => theme.colors.textThird};
    --color--border-primary: ${({ theme }) => theme.colors.borderPrimary};
  }

  * {
    box-sizing: border-box;
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
    width:100%;
    padding: 0 1rem;
    margin: 0 auto;
    @media screen and (min-width: 768px){
      max-width: 768px;
      padding: 0 1.5rem;
    }
    @media screen and (min-width: 1280px){
      max-width: 1280px;
      padding: 0 2.5rem;
    }
  }

  .active-sidebar {
    background-color: rgba(0, 0, 0, 0.05);
    font-weight: 400;
  }
`;
