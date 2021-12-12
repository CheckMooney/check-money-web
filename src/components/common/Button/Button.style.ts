import styled, { css, CSSProp } from 'styled-components';

export const DefaultButton = styled.button<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;
  padding: 0.75rem 1rem;

  &:hover {
    opacity: 0.75;
  }

  ${({ theme, color }) => css`
    border: 1px solid
      ${color === 'primary'
        ? theme.color.primary.base
        : theme.color.border.base};
    border-radius: ${theme.radius.md};
    color: ${color === 'primary' ? 'white' : theme.color.text.base};
    background-color: ${color === 'primary'
      ? theme.color.primary.base
      : theme.color.background.base};

    &:disabled {
      background-color: ${theme.color.disabled};
      border-color: ${theme.color.disabled};
      cursor: not-allowed;
    }
  `}
`;

export const BlockButton = styled(DefaultButton)<{
  $cssProps?: CSSProp;
}>`
  ${({ $cssProps }) => css`
    ${$cssProps}
  `}
`;

export const FullWidthButton = styled(DefaultButton)<{
  $cssProps?: CSSProp;
}>`
  width: 100%;

  ${({ $cssProps }) => css`
    ${$cssProps}
  `}
`;

export const SmallButton = styled(DefaultButton)<{
  $cssProps?: CSSProp;
}>`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;

  ${({ $cssProps }) => css`
    ${$cssProps}
  `}
`;
