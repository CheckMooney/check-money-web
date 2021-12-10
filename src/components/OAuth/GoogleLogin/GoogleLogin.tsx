import React from 'react';
import googleLogo from 'assets/svg/google-logo.svg';
import { reqeustLoginGoogle } from 'services/requests';
import { useUserContext } from 'contexts/UserContext';
import {
  GoogleLogin as ReactGoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { GoogleLoginButton } from './GoogleLogin.style';

const GoogleLogin = () => {
  const { login } = useUserContext();
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ?? '';

  const onGoolgeLoginSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    try {
      if ('tokenId' in response) {
        const { access_token, refresh_token } = await reqeustLoginGoogle(
          response.tokenId,
        );
        login(refresh_token, access_token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReactGoogleLogin
      clientId={googleClientId}
      onSuccess={onGoolgeLoginSuccess}
      onFailure={() => {
        alert('구글 로그인에 실패하였습니다.');
      }}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => (
        <GoogleLoginButton
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img src={googleLogo} alt="구글 로고" />
          구글 계정으로 계속하기
        </GoogleLoginButton>
      )}
    />
  );
};

export default GoogleLogin;
