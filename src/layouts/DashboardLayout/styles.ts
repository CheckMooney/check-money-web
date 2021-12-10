import styled from 'styled-components';
import { HEADER_HEIGHT_REM } from 'constants/layout';

export const DashboardContainer = styled.div`
  display: flex;
`;

export const DashboardMainContainer = styled.main<{ isOpen: boolean }>`
  flex: 1;
  margin-left: ${(props) => (props.isOpen ? '15rem' : '0')};
  transition: margin-left 0.25s ease-in;

  height: calc(100vh - ${HEADER_HEIGHT_REM});
  overflow: hidden;
`;

export const DashboardOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 90;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: opacity 0.25s ease-in;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
