import React, { useEffect } from 'react';
import { Button } from 'components/common';
import { useForm } from 'react-hook-form';
import { useRegisterContext } from 'contexts/RegisterContext';
import { AuthForm, AuthFormInput } from '.';
import { CONFIRM_CODE_REGEX } from 'constants/regex';
import { useConfirmCodeMutation } from 'services/queries/auth';
import useErrorMessage from 'hooks/useErrorMessage';

interface ConfirmCodeFormData {
  code: string;
}

export const ConfirmCodeForm = () => {
  const { currentEmail, confirmCode } = useRegisterContext();
  const { errorMessage, handleError } = useErrorMessage();
  const {
    mutate: confirmCodeMutation,
    isLoading,
    isError,
    error,
  } = useConfirmCodeMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ConfirmCodeFormData>({
    mode: 'onChange',
    defaultValues: {
      code: '',
    },
  });

  useEffect(() => {
    if (isError) {
      handleError(error);
    }
  }, [isError, error, handleError]);

  const onSubmit = ({ code }: ConfirmCodeFormData) => {
    confirmCodeMutation(
      { email: currentEmail, code },
      {
        onSuccess: () => {
          confirmCode();
        },
      },
    );
  };

  return (
    <AuthForm
      title="이메일 인증"
      subTitle={`${currentEmail} 으로 6자리 인증번호가 전송되었습니다.`}
      footerContent="인증번호를 받지 못하셨나요?"
      footerLink={`/auth/resend-code?email=${currentEmail}`}
      footerLinkNewTab
      footerLabel="인증번호 재전송"
      errorMsg={errorMessage}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormInput
          id="code"
          type="text"
          label="인증번호"
          errorMsg={errors.code?.message}
          {...register('code', {
            required: true,
            pattern: {
              value: CONFIRM_CODE_REGEX,
              message: '인증번호는 숫자 6자리로 이루어져있습니다.',
            },
          })}
        />
        <Button
          disabled={isLoading || !isDirty || !isValid}
          aria-label="인증코드 인증"
          type="submit"
          buttonType="primary"
          fullWidth
        >
          인증하기
        </Button>
      </form>
    </AuthForm>
  );
};
