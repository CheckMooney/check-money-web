import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { setTabletMediaQuery } from 'components/styled/mediaQueries';
import { MAIN_HEADER_HEIGHT_REM } from 'constants/layout';

export const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${MAIN_HEADER_HEIGHT_REM};

  ${({ isScrolled, theme: { color, zIndex } }) => css`
    z-index: ${zIndex.sticky};
    background-color: ${color.background.base};
    ${isScrolled &&
    css`
      border-bottom: 1px solid ${color.border.base};
    `}
  `}
`;

export const Container = styled.div`
  height: ${MAIN_HEADER_HEIGHT_REM};

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationContainer = styled.nav`
  visibility: hidden;

  ${setTabletMediaQuery`
      visibility: visible;
  `}
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavigationItem = styled(Link)<{ color?: string }>`
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;

  font-size: 0.875rem;
  font-weight: 600;

  ${({ theme, color }) => css`
    background-color: ${color === 'primary'
      ? theme.color.primary.base
      : theme.color.background.base};
    color: ${color === 'primary' ? 'white' : theme.color.text.base};
  `}
`;

export const MobileMenuButton = styled.button`
  display: block;

  ${setTabletMediaQuery`
    display: none;
  `}
`;

export const MobileNavigationContainer = styled.div<{ isOpen: boolean }>`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;

  transform: translateX(${(props) => (props.isOpen ? '0' : '110vw')});
  transition: all 0.2s ease-in;

  ${({ theme: { color, zIndex } }) => css`
    z-index: ${zIndex.sticky};
    background-color: ${color.background.base};
  `}
  ${setTabletMediaQuery`
    display: none;
  `}
`;

export const MobileNavigationHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 4rem;
  padding: 0 1rem;
`;

export const MobileNavigationBody = styled.nav`
  padding: 1rem;
`;

export const MobileNavigationList = styled.ul`
  padding: 0;
`;

export const MobileNavigationItem = styled(Link)`
  display: block;
  font-size: 1.5rem;
  padding: 1rem 0;
`;
