import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/png/logo.png';
import largeLogo from '../../assets/png/logo-large.png';

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="M자 모양의 로고"
        height="32"
        sizes="(max-width: 768px) 32px"
        srcSet={`${logo} 512w, ${largeLogo} 2048w`}
      />
    </Link>
  );
};

export default Logo;
