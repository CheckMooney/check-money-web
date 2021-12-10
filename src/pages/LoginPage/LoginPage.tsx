import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, LOGIN_SCHEMA } from 'constants/schema';

import AuthFormTemplate from 'components/common/AuthFormTemplate/AuthFormTemplate';
import AuthFormInput from 'components/common/AuthFormInput/AuthFormInput';
import TextLink from 'components/common/TextLink/TextLink';
import Button from 'components/common/Button/Button';
import { FindPasswordLinkStyle } from './LoginPage.style';
import { useLoginMutation } from 'services/queries/auth';
import { useUserContext } from 'contexts/UserContext';

const FooterComponent = () => {
  return (
    <>
      계정이 없으신가요?{' '}
      <TextLink to="/auth/register" color="primary">
        회원가입
      </TextLink>
    </>
  );
};

const LoginPage = () => {
  const { login } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: yupResolver(LOGIN_SCHEMA),
  });
  const { mutate: loginMutate, isLoading, error } = useLoginMutation();

  const handleLogin = ({ email, password }: LoginSchema) => {
    loginMutate(
      { email, password },
      {
        onSuccess: ({ refresh_token, access_token }) => {
          login(refresh_token, access_token);
        },
      },
    );
  };

  return (
    <AuthFormTemplate
      title="로그인"
      enableOAuth
      footerComponent={<FooterComponent />}
      errorMessage={error?.message}
    >
      <form onSubmit={handleSubmit(handleLogin)}>
        <AuthFormInput
          id="email"
          type="email"
          label="이메일"
          errorMessage={errors.email?.message}
          autoFocus
          {...register('email')}
        />
        <AuthFormInput
          id="password"
          type="password"
          label="비밀번호"
          {...register('password')}
        />
        <TextLink
          to="/auth/find-password"
          color="secondary"
          cssProps={FindPasswordLinkStyle}
        >
          비밀번호를 잊어버리셨나요?
        </TextLink>
        <Button
          isLoading={isLoading}
          buttonType="fullWidth"
          disabled={!isValid || !isDirty}
        >
          로그인
        </Button>
      </form>
    </AuthFormTemplate>
  );
};

export default LoginPage;
