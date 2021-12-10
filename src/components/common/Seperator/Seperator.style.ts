import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  ${({ theme: { color } }) => `
    border-top: 1px solid ${color.border.base};
    color: ${color.border.dark};
  `}
`;

export const Label = styled.div`
  position: absolute;
  padding: 0 1rem;
  font-size: 0.875rem;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ theme: { color } }) => `
    background-color: ${color.background.base}
  `}
`;
