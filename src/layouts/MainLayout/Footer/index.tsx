import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoGithub, IoLogoTwitter } from 'react-icons/io5';
import {
  FooterLeftContainer,
  FooterRightContainer,
  FooterContainer,
  FooterTopContainer,
  SocialLink,
  FooterBottomContainer,
} from './styles';
import blackLogo from '../../../assets/png/logo-black.png';

const Footer = () => {
  const socialItems = [
    {
      icon: IoLogoTwitter,
      href: 'https://twitter.com/',
    },
    {
      icon: IoLogoFacebook,
      href: 'https://facebook.com/',
    },
    {
      icon: IoLogoGithub,
      href: 'https://github.com/',
    },
  ];

  return (
    <FooterContainer>
      <div className="container">
        <FooterTopContainer>
          <FooterLeftContainer>
            <Link to="/">
              <img
                src={blackLogo}
                alt="검은색 M모양 로고"
                width={48}
                height={48}
              />
            </Link>
            <p>체크 머니와 함께 당신의 돈을 효율적으로 관리하세요.</p>
            <div>
              {socialItems.map((item, i) => (
                <SocialLink key={i} href={item.href}>
                  <item.icon size={32} />
                </SocialLink>
              ))}
            </div>
          </FooterLeftContainer>
          <FooterRightContainer></FooterRightContainer>
        </FooterTopContainer>
        <FooterBottomContainer>
          © 2021 Check Money. All rights reserved.
        </FooterBottomContainer>
      </div>
    </FooterContainer>
  );
};

export default Footer;
