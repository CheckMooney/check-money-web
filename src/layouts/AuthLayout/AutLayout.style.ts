import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  /* ${({ theme: { color } }) => `
    background-color : ${color.background.dark}
  `}; */
`;

export const InnerWrapper = styled.div`
  max-width: 512px;
  margin: 0 auto;
  background-color: white;
`;
