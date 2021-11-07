import React from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterContext } from 'contexts/RegisterContext';
import { Button } from 'components/common';
import { useHistory } from 'react-router';
import { AuthForm, AuthFormInput, PasswordValidaton } from '.';
import { PASSWORD_REGEX } from 'constants/regex';
import { useRegisterMutation } from 'services/queries/auth';

interface RegisterFormData {
  name: string;
  password: string;
}

export const RegisterForm = () => {
  const history = useHistory();
  const { isLoading, error, mutate } = useRegisterMutation();
  const { currentEmail, setInitialState } = useRegisterContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, isValid, errors },
  } = useForm<RegisterFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      password: '',
    },
  });
  const watchPassword = watch('password');

  const onSubmit = handleSubmit(({ name, password }: RegisterFormData) => {
    mutate(
      {
        email: currentEmail,
        name,
        password,
      },
      {
        onSuccess: (data) => {
          setInitialState();
          history.push('/auth/login');
        },
      },
    );
  });

  return (
    <AuthForm
      title="거의 마쳤습니다."
      footerContent="이미 가입하셨나요?"
      footerLink="/auth/login"
      footerLabel="로그인"
      errorMsg={error?.response?.data?.message}
    >
      <form onSubmit={onSubmit}>
        <AuthFormInput
          id="email"
          label="이메일"
          disabled={true}
          value={currentEmail ?? ''}
        />
        <AuthFormInput
          id="name"
          type="text"
          label="이름"
          placeholder="이름(닉네임)을 입력하세요."
          errorMsg={errors.name?.message}
          {...register('name', {
            required: true,
            minLength: {
              value: 2,
              message: '이름(닉네임)은 2자 이상이어야 합니다.',
            },
            maxLength: {
              value: 10,
              message: '이름(닉네임)은 10자 이하이어야 합니다.',
            },
          })}
        />
        <AuthFormInput
          id="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요."
          {...register('password', {
            required: true,
            pattern: PASSWORD_REGEX,
          })}
        />
        <PasswordValidaton password={watchPassword} />
        <Button
          disabled={isLoading || !isDirty || !isValid}
          aria-label="이메일로 가입하기"
          type="submit"
          buttonType="primary"
          fullWidth
        >
          이메일로 가입
        </Button>
      </form>
    </AuthForm>
  );
};
