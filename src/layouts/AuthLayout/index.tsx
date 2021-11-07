import React from 'react';
import * as Styled from './styles';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <main>
      <Styled.AuthLayoutWrapper>
        <Styled.AuthLayoutInnerWrapper>
          {children}
        </Styled.AuthLayoutInnerWrapper>
      </Styled.AuthLayoutWrapper>
    </main>
  );
};

export default AuthLayout;
