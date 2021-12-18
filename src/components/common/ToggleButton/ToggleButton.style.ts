import styled, { css } from 'styled-components';

export const StyledToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;

  ${({ theme: { color, radius } }) => css`
    border-radius: ${radius.md};
    background-color: ${color.background.dark};
  `}
`;

export const StyledToggleButton = styled.button<{ isActive: boolean }>`
  ${({ isActive, theme: { color, radius, shadow } }) => css`
    border-radius: ${radius.md};
    padding: 0.5rem 0.75rem;

    font-size: 1rem;
    color: ${color.text.lighter};
    transition: all 0.25s ease;

    ${isActive &&
    css`
      font-weight: 700;
      color: ${color.text.base};
      background-color: ${color.background.base};
      box-shadow: ${shadow.sm};
    `}
  `}
`;
