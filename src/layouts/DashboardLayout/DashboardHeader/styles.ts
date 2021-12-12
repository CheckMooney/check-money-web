import {
  setDesktopMediaQuery,
  setTabletMediaQuery,
} from 'components/styled/mediaQueries';
import { HEADER_HEIGHT_REM } from 'constants/layout';
import styled, { css, CSSProperties } from 'styled-components';

export const TopBarContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT_REM};

  ${({ theme: { color, zIndex } }) => `
    border: 1px solid ${color.border.light};
    color: ${color.text.light};
    background-color: ${color.background.dark};
    z-index: ${zIndex.sticky};
  `};
`;

export const TopBarInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  ${setTabletMediaQuery`
    padding: 0 2rem;
  `}

  ${setDesktopMediaQuery`
    padding: 0 2.5rem;
  `}
`;

export const TopBarLeft = styled.div`
  display: flex;
`;

export const TopBarRight = styled.div`
  display: flex;
`;

export const TopBarButton = styled.button<CSSProperties>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: ${({ marginRight }) => marginRight};
  border-radius: 0.25rem;
  padding: 0.125rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${({ theme: { color } }) => css`
    color: ${color.text.base};
  `}
`;

export const ProfileImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.75rem;
`;
