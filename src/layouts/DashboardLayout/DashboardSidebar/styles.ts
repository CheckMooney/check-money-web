import { HEADER_HEIGHT_REM, SIDEBAR_WIDTH_REM } from 'constants/layout';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const DashboardSidebarContainer = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  width: ${SIDEBAR_WIDTH_REM};
  height: calc(100vh - ${HEADER_HEIGHT_REM});
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 1rem;
  transition: left 0.25s ease;

  ${({ isOpen, theme }) => css`
    left: ${isOpen ? '0' : '-20rem'};
    background-color: ${theme.color.background.dark};
    z-index: ${theme.zIndex.sticky};
  `}
`;

export const DashboardSidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const SidebarItem = styled.li`
  margin-bottom: 0.25rem;
  padding: 0.375rem;
  border-radius: 0.25rem;

  min-height: 1.5rem;
  line-height: 1.5rem;
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  flex: 1;

  svg {
    margin-right: 0.5rem;
  }
`;

export const AddAccountItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
