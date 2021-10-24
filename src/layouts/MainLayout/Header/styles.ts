import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  width: 100%;
  height: 4rem;
  z-index: 100;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100%;
`;

export const NavigationContainer = styled.nav`
  @media screen and (max-width: 50rem) {
    visibility: hidden;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavigationItem = styled(NavLink)`
  display: block;
  padding: 0 1rem;
  font-weight: 500;
  line-height: 4rem;
`;

export const MobileMenuButton = styled.button`
  display: none;
  padding: 0 1rem;
  @media screen and (max-width: 50rem) {
    display: inline-block;
  }
`;

export const MobileNavigationContainer = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color--bg-primary);
  transform: translateX(${(props) => (props.isOpen ? '0' : '110vw')});
  transition: all 0.2s ease-in;
  @media screen and (max-width: 50rem) {
    display: block;
  }
  .mobile-navigation {
    padding: 1rem 1.5rem;
  }
`;

export const MobileNavigationList = styled.ul`
  padding: 2rem 0;
`;

export const MobileNavigationItem = styled(NavLink)`
  display: block;
  padding: 2rem 0;
  font-size: 1.5rem;
  font-family: 500;
  border-bottom: 1px solid var(--color--text-primary);
`;
