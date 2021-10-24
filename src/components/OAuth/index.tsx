import React from 'react';
import qs from 'querystring';
import GoogleLogo from '../../assets/svg/google-logo.svg';
import FaceBookLogo from '../../assets/svg/facebook-logo.svg';
import { StyledButton } from './styles';

export const GoogleLoginButton = () => {
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';

  const queryStr = qs.stringify({
    client_id: CLIENT_ID,
    redirect_uri: 'http://localhost:3000',
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
  });

  const loginUrl = AUTHORIZE_URI + '?' + queryStr;

  return (
    <StyledButton href={loginUrl}>
      <img src={GoogleLogo} alt="구글 로고" />
      구글 계정으로 계속하기
    </StyledButton>
  );
};

export const FaceBookLoginButton = () => {
  return (
    <StyledButton href="/">
      <img src={FaceBookLogo} alt="페이스북 로고" />
      페이스북 계정으로 계속하기
    </StyledButton>
  );
};
