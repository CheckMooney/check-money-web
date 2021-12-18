import styled, { css } from 'styled-components';
import { setTabletMediaQuery } from 'components/styled/mediaQueries';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 80rem;
  padding: 0 1rem;
`;

export const HeaderWrapper = styled.div`
  padding: 2rem 0;

  ${({ theme: { color } }) => css`
    background-color: ${color.background.base};
  `}

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  ${setTabletMediaQuery`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}
`;

export const ChartWrapper = styled.div`
  width: 100%;

  ${({ theme: { shadow, color, radius } }) => css`
    border-radius: ${radius.lg};
    background-color: ${color.background.base};
    box-shadow: ${shadow.lg};
  `}
`;
