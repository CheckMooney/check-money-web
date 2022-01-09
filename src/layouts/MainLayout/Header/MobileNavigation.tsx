import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import {
  MobileMenuButton,
  MobileNavigationContainer,
  MobileNavigationList,
  MobileNavigationItem,
  MobileNavigationHeader,
  MobileNavigationBody,
} from './styles';

export const MobileNavigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  let location = useLocation();

  useEffect(() => {
    setIsOpenMobileMenu(false);
  }, [location]);

  const navigationItem = [
    {
      buttonType: 'primary',
      label: '로그인',
      to: 'auth/login',
    },
    {
      buttonType: 'base',
      label: '회원가입',
      to: 'auth/register',
    },
  ];

  return (
    <>
      <MobileMenuButton onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}>
        <IoMenuOutline size={32} />
      </MobileMenuButton>
      <MobileNavigationContainer isOpen={isOpenMobileMenu}>
        <MobileNavigationHeader>
          <MobileMenuButton
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          >
            <IoCloseOutline size={32} />
          </MobileMenuButton>
        </MobileNavigationHeader>
        <MobileNavigationBody>
          <MobileNavigationList>
            {navigationItem.map((item, i) => (
              <li key={i}>
                <MobileNavigationItem to={item.to}>
                  {item.label}
                </MobileNavigationItem>
              </li>
            ))}
          </MobileNavigationList>
        </MobileNavigationBody>
      </MobileNavigationContainer>
    </>
  );
};
