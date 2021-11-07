import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardSidebarContainer = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  width: 20rem;
  height: calc(100vh - 3rem);
  left: ${(props) => (props.isOpen ? '0' : '-20rem')};
  padding-top: 2rem;
  padding-left: 2.5rem;
  background-color: var(--color--bg-secondary);

  transition: left 0.25s ease-in;
  z-index: 100;
`;

export const DashboardSidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
`;

export const DashboardSidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.75rem 0.5rem;
  border-radius: 0.25rem;
  .item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    min-width: 1.5rem;
  }
  .item-label {
    display: flex;
    font-size: 1rem;
    font-weight: 300;
    color: var(--color--text-secondary);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
