import { setTabletMediaQuery } from 'components/styled/mediaQueries';
import styled, { css } from 'styled-components';

export const ModalTemplateWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;

  ${({ theme: { zIndex } }) => `
    z-index: ${zIndex.modal};
  `}
`;

export const BackLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const FrontLayer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 2rem 1rem 0 1rem;
  ${setTabletMediaQuery`
    align-items: center;
  `}
`;

export const FrontWrapper = styled.div<{ width?: string }>`
  width: 100%;
  max-height: 100%;
  overflow: auto;
  ${({ width, theme: { color, zIndex, radius, shadow } }) => css`
    max-width: ${width ? width : '30rem'};
    border-radius: ${radius.lg};
    background-color: ${color.background.base};
    box-shadow: ${shadow.lg};
    z-index: ${zIndex.modal + 1};
  `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem 1.5rem;
  ${({ theme: { color, zIndex, radius } }) => `
    border-bottom: 1px solid ${color.border.base};
    border-top-left-radius: ${radius.lg};
    border-top-right-radius: ${radius.lg};
    background-color: ${color.background.dark};
  `}
`;

export const Heading = styled.h1`
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 0.25rem;
`;

export const BodyWrapper = styled.div`
  padding: 0 1.5rem;
`;
