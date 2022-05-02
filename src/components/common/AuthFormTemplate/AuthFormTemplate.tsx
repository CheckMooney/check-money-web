import React from 'react';
import Seperator from '../Seperator/Seperator';
import GoogleLogin from 'components/OAuth/GoogleLogin/GoogleLogin';
import {
  HeaderWrapper,
  Wrapper,
  FooterWrapper,
  ErrorWrapper,
} from './AuthFormTemplate.style';
import { IoAlertCircle } from 'react-icons/io5';
import { Logo } from '../Logo/Logo';
import Head from '../Head/Head';

interface AuthFormTemplateProps {
  title: string;
  subtitle?: string;
  enableOAuth?: boolean;
  footerComponent?: React.ReactNode;
  errorMessage?: string;
}

const AuthFormTemplate: React.FC<AuthFormTemplateProps> = ({
  title,
  subtitle,
  enableOAuth,
  footerComponent,
  errorMessage,
  children,
}) => {
  return (
    <Wrapper>
      <Head label={title} />
      <HeaderWrapper>
        <Logo />
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </HeaderWrapper>
      {enableOAuth && (
        <>
          <GoogleLogin />
          <Seperator label="또는" />
        </>
      )}
      {errorMessage && (
        <ErrorWrapper>
          <IoAlertCircle size={16} />
          {errorMessage}
        </ErrorWrapper>
      )}
      {children}
      {footerComponent && (
        <>
          <Seperator />
          <FooterWrapper>{footerComponent}</FooterWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default AuthFormTemplate;
