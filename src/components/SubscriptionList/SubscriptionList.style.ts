import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
  padding-bottom: 3rem;
`;
export const Heading = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;

  margin-bottom: 0.75rem;
`;

export const SubHeading = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.color.text.lighter};
  `}
`;

export const ListWrapper = styled.div`
  margin-top: 1rem;
  padding-bottom: 2rem;
`;
