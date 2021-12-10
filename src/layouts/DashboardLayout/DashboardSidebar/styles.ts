import styled, { css } from 'styled-components';

export const DashboardSidebarContainer = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  width: 15rem;
  height: calc(100vh - 3rem);
  padding-top: 2rem;
  padding-left: 2.5rem;
  padding-right: 0.5rem;
  transition: left 0.25s ease-in;
  z-index: 100;

  ${({ isOpen, theme }) => css`
    left: ${isOpen ? '0' : '-20rem'};
    background-color: ${theme.color.background.dark};
  `}
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

export const SidebarItem = styled.li`
  padding: 0.75rem 0.5rem;
  border-radius: 0.25rem;
`;

export const AddAccountItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
