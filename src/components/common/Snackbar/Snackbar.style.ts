import { SNACKBAR_HEIGHT_REM } from 'constants/snackbar';
import styled, { css, keyframes } from 'styled-components';

export const bottomToBottom = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(50%);
  }
  
  10% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(50%);
  }
`;

export const progressWidth = keyframes`
from{
  width:0;
}
  10% {
    width: 0;
  }
  90% {
    width: 100%;
  }
  to{
  width:100%;
}
`;

export const SnackbarWrapper = styled.div<React.CSSProperties>`
  position: fixed;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 20rem;
  height: ${`${SNACKBAR_HEIGHT_REM}rem`};
  border-radius: 0.25rem;
  opacity: 0;
  overflow: hidden;
  font-size: 0.875rem;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.25);
  transform: translateX(-50%) translateY(50%);

  ${({ bottom, animationDuration, theme: { color, zIndex } }) => css`
    bottom: ${bottom};
    color: ${color.text.base};
    background-color: ${color.background.base};
    z-index: ${zIndex.snackbar};
    animation: ${animationDuration} ${bottomToBottom} ease;
  `}
`;

export const SnackbarProgress = styled.div<React.CSSProperties>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 0;

  ${({ animationDuration, theme: { color } }) => css`
    background-color: ${color.primary.base};
    animation: ${animationDuration} ${progressWidth} ease-in;
  `}
`;
