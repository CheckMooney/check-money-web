import styled from 'styled-components';
import { setTabletMediaQuery } from 'components/styled/mediaQueries';

export const Wrapper = styled.div`
  padding: 2rem;
  margin: 2rem 0;
  ${({ theme: { color } }) => `
    border: 0px solid ${color.border.base};
    background-color: ${color.background.base};
  `};

  ${setTabletMediaQuery`
    margin: 4rem 0;
    border-radius: 0.5rem;
    border-width: 1px;
  `}
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.text.light};
  }
`;

export const FooterWrapper = styled.div`
  text-align: center;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 0.5rem 0;
  margin-bottom: 1rem;

  font-size: 0.875rem;

  ${({ theme: { color } }) => `
    color : ${color.danger};
  `}

  svg {
    margin-right: 0.25rem;
  }
`;
