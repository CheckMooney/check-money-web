import React from 'react';
import { NavigationContainer, NavigationItem, NavigationList } from './styles';

export const Navigation = () => {
  const navigationItem = [
    {
      label: '로그인',
      to: 'auth/login',
    },
    {
      label: '회원가입',
      to: 'auth/register',
    },
  ];
  return (
    <NavigationContainer>
      <NavigationList>
        {navigationItem.map((item, i) => (
          <li key={i}>
            <NavigationItem to={item.to}>{item.label}</NavigationItem>
          </li>
        ))}
      </NavigationList>
    </NavigationContainer>
  );
};
