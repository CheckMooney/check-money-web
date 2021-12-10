import styled from 'styled-components';

export const ModalTemplateWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  ${({ theme: { zIndex } }) => `
    z-index: ${zIndex.modal};
  `}
`;

export const BackLayer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const FrontLayer = styled.div`
  width: 25rem;

  ${({ theme: { color, zIndex, radius } }) => `
    border-radius: ${radius.lg};
    background-color: ${color.background.base};
    z-index: ${zIndex.modal};
  `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem 1.5rem;
  ${({ theme: { color, zIndex, radius } }) => `
    border-bottom: 1px solid ${color.border.base};
    border-top-left-radius: ${radius.lg};
    border-top-right-radius: ${radius.lg};
    background-color: ${color.background.dark};
    z-index: ${zIndex.modal};
  `}
`;

export const Heading = styled.h1`
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 0.25rem;
`;

export const BodyWrapper = styled.div`
  padding: 0 1.5rem;
`;
