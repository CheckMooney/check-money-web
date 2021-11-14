import styled, { CSSProperties } from 'styled-components';

export const TopBarContainer = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  background-color: var(--color--bg-secondary);
  color: var(--color--text-secondary);
  z-index: 100;
`;

export const TopBarInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  box-sizing: border-box;
  margin-right: ${({ marginRight }) => marginRight};
  cursor: pointer;
  border-radius: 0.25rem;
  color: #484b4c;
  height: 1.75rem;
  min-width: 1.75rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
