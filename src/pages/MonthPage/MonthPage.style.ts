import styled, { css } from 'styled-components';
import {
  setDesktopMediaQuery,
  setTabletMediaQuery,
} from 'components/styled/mediaQueries';

export const Wrapper = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 0 1rem;

  ${setTabletMediaQuery`
    max-width: 34rem;
  `}

  ${setDesktopMediaQuery`
    max-width: 64rem;
  `}
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
  padding-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  ${setDesktopMediaQuery`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `};
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;

  ${({ theme: { shadow, color, radius } }) => css`
    border: 1px solid ${color.border.base};
    border-radius: ${radius.lg};
    background-color: ${color.background.base};
  `}
`;
