import React from 'react';
import { HeaderContainer, Container } from './styles';
import { MobileNavigation } from './MobileNavigation';
import { Navigation } from './Navigation';
import { Logo } from 'components/common/Logo/Logo';
import ResponsiveContainer from 'components/common/ResponsiveContainer/ResponsiveContainer';

const Header = () => {
  return (
    <HeaderContainer>
      <ResponsiveContainer>
        <Container>
          <Logo />
          <Navigation />
          <MobileNavigation />
        </Container>
      </ResponsiveContainer>
    </HeaderContainer>
  );
};

export default Header;
