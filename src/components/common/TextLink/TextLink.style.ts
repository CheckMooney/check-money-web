import styled, { css, CSSProp } from 'styled-components';
import { Link } from 'react-router-dom';

export const DefaultLink = styled(Link)<{ color?: string }>`
  &:hover {
    text-decoration: underline;
  }

  ${({ theme, color }) => `
    color: ${
      color === 'primary'
        ? theme.color.primary.base
        : color === 'secondary'
        ? theme.color.text.light
        : theme.color.text.base
    };
  `};
`;

export const InlineLink = styled(DefaultLink)<{
  $cssProps?: CSSProp;
}>`
  display: inline-block;

  ${({ $cssProps }) => css`
    ${$cssProps}
  `}
`;

export const BlockLink = styled(DefaultLink)<{
  $cssProps?: CSSProp;
}>`
  display: block;

  ${({ $cssProps }) => css`
    ${$cssProps}
  `}
`;
