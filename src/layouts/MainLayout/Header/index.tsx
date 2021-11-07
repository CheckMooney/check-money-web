import React from 'react';
import { Container, HeaderContainer } from './styles';
import { MobileNavigation } from './MobileNavigation';
import { Navigation } from './Navigation';
import { Logo } from 'components/common';

const Header = () => {
  return (
    <HeaderContainer>
      <Container className="container">
        <Logo />
        <Navigation />
        <MobileNavigation />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
