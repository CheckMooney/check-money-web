import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, Arial, Roboto, sans-serif;
    background-color: ${({ theme }) => theme.color.background.base};
    color: ${({ theme }) => theme.color.text.base};
  }

  button {
    border: none;
    outline: none;
    padding: 0;
    color: ${({ theme }) => theme.color.text.base};
    background-color: transparent;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  textarea {
    resize: none;
  }

  a, input, select, button {
    color: ${({ theme }) => theme.color.text.base};
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    cursor: pointer;
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
  }

  svg {
    display: block;
  }

  input[type="date"] {    
    appearance: none;
    font-family: Helvetica, Arial, Roboto, sans-serif;
  }
`;
