import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;

  margin-bottom: 1rem;
  h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const ChartWrapper = styled.div`
  flex: 1;
`;
