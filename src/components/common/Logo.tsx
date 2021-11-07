import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/png/logo.png';

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="M자 모양의 로고" height="32" />
    </Link>
  );
};
