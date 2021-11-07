import React from 'react';
import { Logo, Seperator, TextLink } from 'components/common';
import { GoogleLoginButton } from '../OAuth';
import * as Styled from './styles';
import { IoAlertCircleSharp } from 'react-icons/io5';

interface AuthFormProps {
  title: string;
  subTitle?: string;
  footerContent: string;
  footerLink: string;
  footerLabel: string;
  oauth?: boolean;
  errorMsg?: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subTitle,
  footerContent,
  footerLink,
  footerLabel,
  oauth,
  errorMsg,
  children,
}) => {
  return (
    <Styled.AuthFormWrapper>
      <Styled.AuthFormHeader>
        <Logo />
        <h1>{title}</h1>
        {subTitle && <h2>{subTitle}</h2>}
      </Styled.AuthFormHeader>
      {oauth && (
        <>
          <GoogleLoginButton />
          <Seperator label="또는" />
        </>
      )}
      {errorMsg && (
        <Styled.AuthFormError>
          <IoAlertCircleSharp size={16} />
          {errorMsg}
        </Styled.AuthFormError>
      )}
      {children}
      <Seperator />
      <Styled.AuthFormFooter>
        {footerContent}{' '}
        <TextLink to={footerLink} label={footerLabel} type="primary" />
      </Styled.AuthFormFooter>
    </Styled.AuthFormWrapper>
  );
};
