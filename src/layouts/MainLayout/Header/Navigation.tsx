import React from 'react';
import { NavigationContainer, NavigationItem, NavigationList } from './styles';

export const Navigation = () => {
  const navigationItem = [
    {
      label: '로그인',
      to: 'auth/login',
      color: 'base',
    },
    {
      label: '회원가입',
      to: 'auth/register',
      color: 'primary',
    },
  ];

  return (
    <NavigationContainer>
      <NavigationList>
        {navigationItem.map((item, i) => (
          <li key={i}>
            <NavigationItem to={item.to} color={item.color}>
              {item.label}
            </NavigationItem>
          </li>
        ))}
      </NavigationList>
    </NavigationContainer>
  );
};
