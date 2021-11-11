import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthForm, AuthFormInput } from '.';
import { Button, TextLink } from 'components/common';
import { EMAIL_REGEX } from 'constants/regex';
import { useLoginMutation } from 'services/queries/auth';
import * as Styled from './styles';
import { useUserContext } from 'contexts/UserContext';
import { useHistory } from 'react-router';

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const history = useHistory();
  const { login } = useUserContext();
  const { isLoading, error, mutate } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<LoginFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = ({ email, password }: LoginFormData) => {
    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          if (data.result) {
            login(data.token);
            history.push('/');
          }
        },
      },
    );
  };

  return (
    <AuthForm
      title="로그인"
      footerContent="계정이 없습니까?"
      footerLabel="회원가입"
      footerLink="/auth/register"
      errorMsg={error?.response?.data?.message}
      oauth
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormInput
          id="email"
          type="email"
          label="이메일"
          errorMsg={errors.email?.message}
          autoFocus
          {...register('email', {
            required: true,
            pattern: {
              value: EMAIL_REGEX,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
        />
        <AuthFormInput
          id="password"
          type="password"
          label="비밀번호"
          {...register('password', {
            required: true,
          })}
        />
        <Button
          aria-label="로그인"
          disabled={isLoading || !isDirty || !isValid}
          type="submit"
          fullWidth
          buttonType="primary"
        >
          로그인
        </Button>
      </form>
      <Styled.FindPasswordLinkWrapper>
        <TextLink to="/auth/find-password">비밀번호를 잊어버리셨나요?</TextLink>
      </Styled.FindPasswordLinkWrapper>
    </AuthForm>
  );
};
