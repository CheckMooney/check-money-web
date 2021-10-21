import React from 'react';
import { Link } from 'react-router-dom';
import { Container, HeaderContainer } from './styles';
import { MobileNavigation } from './MobileNavigation';
import { Navigation } from './Navigation';
import logo from '../../assets/png/logo.png';

const Header = () => {
  return (
    <HeaderContainer>
      <Container className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="M모양 로고" height="32" />
        </Link>
        <Navigation />
        <MobileNavigation />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
