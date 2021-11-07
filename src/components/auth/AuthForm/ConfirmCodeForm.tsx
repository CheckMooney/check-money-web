import React from 'react';
import { Button } from 'components/common';
import { useForm } from 'react-hook-form';
import { useRegisterContext } from 'contexts/RegisterContext';
import { AuthForm, AuthFormInput } from '.';
import { CONFIRM_CODE_REGEX } from 'constants/regex';
import { useConfirmCodeMutation } from 'services/queries/auth';

interface ConfirmCodeFormData {
  code: string;
}

export const ConfirmCodeForm = () => {
  const { isLoading, error, mutate } = useConfirmCodeMutation();
  const { currentEmail, confirmCode } = useRegisterContext();
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

  const onSubmit = handleSubmit(({ code }: ConfirmCodeFormData) => {
    mutate(
      { email: currentEmail, code },
      {
        onSuccess: () => {
          confirmCode();
        },
      },
    );
  });

  return (
    <AuthForm
      title="이메일 인증"
      subTitle={`메일함(${currentEmail})로 도착한 인증번호를 입력해주세요.`}
      footerContent="이미 가입하셨나요?"
      footerLink="/auth/login"
      footerLabel="로그인"
      errorMsg={error?.response?.data?.message}
    >
      <form onSubmit={onSubmit}>
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
          aria-label="이메일로 가입하기"
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
