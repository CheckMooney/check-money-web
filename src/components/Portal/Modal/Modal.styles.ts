import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;
`;

export const UnderLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const OverLayer = styled.div`
  width: 100%;
  max-width: 32rem;
  border-radius: 0.5rem;
  background-color: var(--color--bg-primary);
`;
