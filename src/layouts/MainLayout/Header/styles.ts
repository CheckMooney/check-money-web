import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  z-index: 100;
  background-color: var(--color--bg-primary);
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
  visibility: hidden;
  @media screen and (min-width: 768px) {
    visibility: visible;
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

  &:hover {
    background-color: var(--color--bg-secondary);
    border-bottom: 1px solid var(--color--primary);
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  color: var(--color--text-primary);
  @media screen and (min-width: 768px) {
    display: none;
  }
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
  background-color: var(--color--bg-primary);
  transform: translateX(${(props) => (props.isOpen ? '0' : '110vw')});
  transition: all 0.2s ease-in;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavigationHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1rem;
`;

export const MobileNavigationBody = styled.nav`
  padding: 1rem;
`;

export const MobileNavigationList = styled.ul`
  padding: 0;
`;

export const MobileNavigationItem = styled(NavLink)`
  display: block;
  font-size: 1.5rem;
  padding: 1rem 0;
`;
