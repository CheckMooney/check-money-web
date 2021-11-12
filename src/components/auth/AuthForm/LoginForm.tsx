import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthForm, AuthFormInput } from '.';
import { Button, TextLink } from 'components/common';
import { EMAIL_REGEX } from 'constants/regex';
import { LoginVariables } from 'types/auth';
import * as Styled from './styles';

interface LoginFormProps {
  onSubmit: (data: LoginVariables) => void;
  isLoading: boolean;
  errorMessage: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading,
  errorMessage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<LoginVariables>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <AuthForm
      title="로그인"
      footerContent="계정이 없습니까?"
      footerLabel="회원가입"
      footerLink="/auth/register"
      errorMsg={errorMessage}
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
        <TextLink to="/auth/find-password" color="secondary">
          비밀번호를 잊어버리셨나요?
        </TextLink>
      </Styled.FindPasswordLinkWrapper>
    </AuthForm>
  );
};
