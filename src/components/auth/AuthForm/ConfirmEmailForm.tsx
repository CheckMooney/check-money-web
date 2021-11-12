import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterContext } from 'contexts/RegisterContext';
import { Button } from 'components/common';
import { AuthForm, AuthFormInput } from '.';
import { EMAIL_REGEX } from 'constants/regex';
import { useConfirmEmailMutation } from 'services/queries/auth';
import useErrorMessage from 'hooks/useErrorMessage';

interface ConfirmEmailFormData {
  email: string;
}

export const ConfirmEmailForm = () => {
  const { confirmEmail } = useRegisterContext();
  const { errorMessage, handleError } = useErrorMessage();
  const {
    isLoading,
    error,
    isError,
    mutate: confirmEmailMutation,
  } = useConfirmEmailMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<ConfirmEmailFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    if (isError) {
      handleError(error);
    }
  }, [isError, error, handleError]);

  const onSubmit = ({ email }: ConfirmEmailFormData) => {
    confirmEmailMutation(
      { email },
      {
        onSuccess: () => {
          confirmEmail(email);
        },
      },
    );
  };

  return (
    <AuthForm
      title="회원가입"
      footerContent="이미 가입하셨나요?"
      footerLink="/auth/login"
      footerLabel="로그인"
      errorMsg={errorMessage}
      oauth
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormInput
          id="email"
          label="이메일"
          type="email"
          errorMsg={errors.email?.message}
          placeholder="이메일을 입력하세요."
          {...register('email', {
            required: true,
            pattern: {
              value: EMAIL_REGEX,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
        />
        <Button
          disabled={isLoading || !isDirty || !isValid}
          aria-label="이메일로 인증코드 전송"
          type="submit"
          buttonType="primary"
          fullWidth
        >
          이메일 인증하기
        </Button>
      </form>
    </AuthForm>
  );
};
