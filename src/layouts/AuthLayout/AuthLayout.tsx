import React from 'react';
import { InnerWrapper, Wrapper } from './AutLayout.style';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
};

export default AuthLayout;
