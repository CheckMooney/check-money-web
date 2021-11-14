import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const DashboardSidebarContainer = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  width: 20rem;
  height: calc(100vh - 3rem);
  left: ${(props) => (props.isOpen ? '0' : '-20rem')};
  padding-top: 2rem;
  padding-left: 2.5rem;
  padding-right: 1rem;
  background-color: var(--color--bg-secondary);

  transition: left 0.25s ease-in;
  z-index: 100;
`;

export const DashboardSidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  margin-bottom: 2rem;

  li {
    width: 100%;
  }
`;

export const SidebarItem = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.75rem 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const SidebarLink = styled(NavLink)`
  ${SidebarItem}
  svg {
    margin-right: 0.5rem;
  }
`;

export const AddAccountButton = styled.button`
  ${SidebarItem}

  width: 100%;
  justify-content: space-between;
`;
