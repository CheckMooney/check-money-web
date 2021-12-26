import React from 'react';
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg';
import { Wrapper } from './LoadingWithLogo.style';
import Spinner from '../Spinner/Spinner';

const LoadingWithLogo: React.FC = () => {
  return (
    <Wrapper>
      <LogoIcon width={80} height={80} />
      <Spinner size={24} color="blue" />
    </Wrapper>
  );
};

export default LoadingWithLogo;
