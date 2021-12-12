import styled, { css, CSSProp } from 'styled-components';

export const ProfileImageWrapper = styled.div<{
  variant: string;
  $cssProps?: CSSProp;
}>`
  ${({ $cssProps, variant }) => css`
    width: ${variant === 'small' ? '2rem' : '5rem'};
    height: ${variant === 'small' ? '2rem' : '5rem'};

    ${$cssProps}
  `}

  img {
    width: 100%;
    height: 100%;
    clip-path: circle(50%);
  }
`;
