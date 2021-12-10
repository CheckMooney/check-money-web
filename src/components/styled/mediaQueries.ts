import { css, CSSProp, SimpleInterpolation } from 'styled-components';

const deviceWidth = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1280px',
};

export const setDesktopMediaQuery = (
  first: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): CSSProp => {
  return css`
    @media only screen and (min-width: ${deviceWidth.desktop}) {
      ${css(first, ...interpolations)}
    }
  `;
};

export const setTabletMediaQuery = (
  first: TemplateStringsArray,
  ...interpolations: string[]
): CSSProp => {
  return css`
    @media only screen and (min-width: ${deviceWidth.tablet}) {
      ${css(first, ...interpolations)}
    }
  `;
};
