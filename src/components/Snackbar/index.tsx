import React from 'react';
import * as Styled from './styles';
import {
  SNACKBAR_DURATION,
  SNACKBAR_HEIGHT_REM,
  SNACKBAR_GAP_REM,
} from 'constants/snackbar';

interface SnackbarProps {
  order: number;
}

const getSnackbarBottom = (order: number) =>
  `${
    order * (SNACKBAR_HEIGHT_REM + SNACKBAR_GAP_REM) - SNACKBAR_HEIGHT_REM
  }rem`;

const Snackbar: React.FC<SnackbarProps> = ({ children, order }) => {
  return (
    <Styled.SnackbarWrapper
      bottom={getSnackbarBottom(order)}
      animationDuration={`${SNACKBAR_DURATION + 250}ms`}
    >
      {children}
      <Styled.SnackbarProgress
        animationDuration={`${SNACKBAR_DURATION + 250}ms`}
      ></Styled.SnackbarProgress>
    </Styled.SnackbarWrapper>
  );
};

export default Snackbar;
