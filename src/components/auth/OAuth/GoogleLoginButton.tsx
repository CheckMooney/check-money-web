import React from 'react';
import styled from 'styled-components';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import googleLogo from '../../../assets/svg/google-logo.svg';
import { reqeustLoginGoogle } from 'services/requests';
import { useUserContext } from 'contexts/UserContext';

const StyledGoogleLoginButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  margin-bottom: 0.75rem;
  border: 1px solid var(--color--border-primary);
  border-radius: 0.25rem;
  background-color: white;
  font-size: 0.875rem;
  line-height: 0;
  cursor: pointer;

  &:hover {
    background-color: rgba(58, 54, 218, 0.1);
    border-color: rgba(58, 54, 218, 0.5);
  }
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

export const GoogleLoginButton = () => {
  const { login } = useUserContext();
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ?? '';

  const onGoolgeLoginSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    try {
      if ('tokenId' in response) {
        const { token } = await reqeustLoginGoogle(response.tokenId);
        login(token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <GoogleLogin
      clientId={googleClientId}
      onSuccess={onGoolgeLoginSuccess}
      onFailure={(response) => {
        alert('구글 로그인에 실패하였습니다.');
      }}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => (
        <StyledGoogleLoginButton
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img src={googleLogo} alt="구글 로고" />
          구글 계정으로 계속하기
        </StyledGoogleLoginButton>
      )}
    />
  );
};
