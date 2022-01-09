import React, { useEffect, useState } from 'react';
import { HeaderContainer, Container } from './styles';
import { MobileNavigation } from './MobileNavigation';
import { Navigation } from './Navigation';
import { Logo } from 'components/common/Logo/Logo';
import ResponsiveContainer from 'components/common/ResponsiveContainer/ResponsiveContainer';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY !== 0) {
      setIsScrolled(true);
      return;
    }
    setIsScrolled(false);
    return;
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
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
