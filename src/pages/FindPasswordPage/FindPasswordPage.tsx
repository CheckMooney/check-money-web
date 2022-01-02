import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ConfirmCodeSchema,
  FindPasswordSchema,
  FIND_PASSWORD_SCHEMA,
  ResetPasswordSchema,
  RESET_PASSWORD_SCHEMA,
} from 'constants/schema';
import { ConfirmCodeForm } from '../RegisterPage/RegisterPage';
import AuthFormTemplate from 'components/common/AuthFormTemplate/AuthFormTemplate';
import AuthFormInput from 'components/common/AuthFormInput/AuthFormInput';
import Button from 'components/common/Button/Button';
import TextLink from 'components/common/TextLink/TextLink';
import {
  useFindPasswordMutation,
  useConfirmCodeMutation,
  useResetPasswordMutation,
} from 'services/queries/auth';
import { useSnackbarContext } from 'contexts/SnackbarContext';
import { useHistory } from 'react-router-dom';

interface FormProps<T> {
  isLoading: boolean;
  onSubmit: (data: T) => void;
  errorMessage?: string;
}

const FooterComponent = () => (
  <TextLink to="/auth/login" color="primary">
    로그인으로 이동
  </TextLink>
);

const FindPasswordForm: React.FC<FormProps<FindPasswordSchema>> = ({
  onSubmit,
  errorMessage,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(FIND_PASSWORD_SCHEMA),
  });

  return (
    <AuthFormTemplate
      title="비밀번호 찾기"
      subtitle="비밀번호 재설정을 위해, 이메일 주소를 입력하세요."
      footerComponent={<FooterComponent />}
      errorMessage={errorMessage}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormInput
          id="email"
          type="email"
          label="이메일"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <Button
          buttonType="fullWidth"
          disabled={!isValid || !isDirty}
          isLoading={isLoading}
        >
          비밀번호 재설정
        </Button>
      </form>
    </AuthFormTemplate>
  );
};

const ResetPasswordForm: React.FC<FormProps<ResetPasswordSchema>> = ({
  onSubmit,
  isLoading,
  errorMessage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(RESET_PASSWORD_SCHEMA),
  });

  return (
    <AuthFormTemplate
      title="비밀번호 재설정"
      subtitle="새로운 비밀번호를 입력해주세요."
      footerComponent={<FooterComponent />}
      errorMessage={errorMessage}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormInput
          id="password"
          type="password"
          label="비밀번호"
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <AuthFormInput
          id="confirm-password"
          type="password"
          label="비밀번호 확인"
          errorMessage={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
        <Button
          buttonType="fullWidth"
          disabled={!isValid || !isDirty}
          isLoading={isLoading}
        >
          비밀번호 재설정
        </Button>
      </form>
    </AuthFormTemplate>
  );
};

interface FindPasswordState {
  email: string;
  state: 'email' | 'code' | 'password';
}

const FindPasswordPage = () => {
  const [findPasswordState, setFindPasswordState] = useState<FindPasswordState>(
    { email: '', state: 'email' },
  );
  const history = useHistory();
  const { pushSnackbarMessage } = useSnackbarContext();

  useEffect(() => {
    setFindPasswordState({
      email: '',
      state: 'email',
    });
  }, []);

  const {
    isLoading: findPasswordLoading,
    mutate: findPasswordMutate,
    error: findPasswordError,
  } = useFindPasswordMutation();

  const onFindPassword = async ({ email }: FindPasswordSchema) => {
    findPasswordMutate(email, {
      onSuccess: () => {
        pushSnackbarMessage('인증 이메일이 전송되었습니다.');
        setFindPasswordState({
          email,
          state: 'code',
        });
      },
    });
  };

  const {
    mutate: confirmCodeMutate,
    isLoading: confirmCodeLoading,
    error: confirmCodeError,
  } = useConfirmCodeMutation();

  const onConfirmCode = ({ code }: ConfirmCodeSchema) => {
    confirmCodeMutate(
      { email: findPasswordState.email, code },
      {
        onSuccess: () => {
          pushSnackbarMessage('이메일이 인증되었습니다.');
          setFindPasswordState({ ...findPasswordState, state: 'password' });
        },
      },
    );
  };

  const {
    mutate: resetPasswordMutate,
    isLoading: resetPasswordLoading,
    error: resetPasswordError,
  } = useResetPasswordMutation();

  const onResetPassword = ({ password }: ResetPasswordSchema) => {
    resetPasswordMutate(
      {
        email: findPasswordState.email,
        newPassword: password,
      },
      {
        onSuccess: () => {
          pushSnackbarMessage('비밀번호가 재설정되었습니다.');
          history.push('/auth/login');
        },
      },
    );
  };

  if (findPasswordState.state === 'email') {
    return (
      <FindPasswordForm
        onSubmit={onFindPassword}
        isLoading={findPasswordLoading}
        errorMessage={findPasswordError?.message}
      />
    );
  } else if (findPasswordState.state === 'code') {
    return (
      <ConfirmCodeForm
        onSubmit={onConfirmCode}
        isLoading={confirmCodeLoading}
        errorMessage={confirmCodeError?.message}
      />
    );
  } else {
    return (
      <ResetPasswordForm
        onSubmit={onResetPassword}
        isLoading={resetPasswordLoading}
        errorMessage={resetPasswordError?.message}
      />
    );
  }
};

export default FindPasswordPage;
