import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/png/logo.png';

interface LogoProps {
  size?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = '32' }) => {
  return (
    <Link to="/">
      <img src={logo} alt="M자 모양의 로고" height={size} />
    </Link>
  );
};
