import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: 1rem;
    color: #aaa;
  }
`;

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ChartWrapper = styled.div`
  flex: 1;
`;

export const Tooltip = styled.span`
  ${({ theme: { color, radius } }) => css`
    display: block;
    padding: 0.5rem;
    border: 1px solid ${color.border.base};
    border-radius: ${radius.md};
    background-color: ${color.background.base};
  `}
`;
