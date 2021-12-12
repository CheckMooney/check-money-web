import styled, { css } from 'styled-components';
import { HEADER_HEIGHT_REM, SIDEBAR_WIDTH_REM } from 'constants/layout';

export const DashboardContainer = styled.div`
  display: flex;
`;

export const DashboardMainContainer = styled.main<{ isOpen: boolean }>`
  flex: 1;
  height: calc(100vh - ${HEADER_HEIGHT_REM});
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    margin-left: ${({ isOpen }) => (isOpen ? SIDEBAR_WIDTH_REM : '0')};
    transition: margin-left 0.25s ease-in;
  }
`;

export const DashboardOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  ${({ isVisible, theme }) => css`
    z-index: ${theme.zIndex.sticky};
    visibility: ${isVisible ? 'visible' : 'hidden'};
    opacity: ${isVisible ? '1' : '0'};
    transition: opacity 0.3s ease;
  `}

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
