import styled from 'styled-components';

export const TopBarContainer = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.4rem;

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
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 0.5rem;
`;

export const TopBarRight = styled.div``;

export const TopBarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 0.25rem;
  color: #484b4c;
  height: 1.75rem;
  min-width: 1.75rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
