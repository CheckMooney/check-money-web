import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
  direction: string;
  showScrollBar: boolean;
}>`
  ${({ direction, showScrollBar }) => css`
    ${direction === 'vertical'
      ? css`
          max-height: 100%;
          overflow-y: scroll;
        `
      : css`
          max-width: 100%;
          overflow-x: scroll;
        `}

    ${!showScrollBar &&
    css`
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
    `}
  `}
`;
