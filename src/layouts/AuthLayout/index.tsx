import React from 'react';
import AuthLayoutContainer from './AuthLayoutContainer';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <main>
      <AuthLayoutContainer>{children}</AuthLayoutContainer>
    </main>
  );
};

export default AuthLayout;
