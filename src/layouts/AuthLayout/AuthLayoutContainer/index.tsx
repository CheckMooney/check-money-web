import React from 'react';
import { StandAloneContainer, StandAloneInnerContainer } from './styles';

const AuthLayoutContainer: React.FC = ({ children }) => {
  return (
    <StandAloneContainer>
      <StandAloneInnerContainer>{children}</StandAloneInnerContainer>
    </StandAloneContainer>
  );
};

export default AuthLayoutContainer;
