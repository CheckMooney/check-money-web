import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.color.background.base};
    background-color: ${theme.color.text.base};
  `}
`;
