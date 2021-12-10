import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FIND_PASSWORD_SCHEMA } from 'constants/schema';

import AuthFormTemplate from 'components/common/AuthFormTemplate/AuthFormTemplate';
import AuthFormInput from 'components/common/AuthFormInput/AuthFormInput';
import Button from 'components/common/Button/Button';
import TextLink from 'components/common/TextLink/TextLink';

const FooterComponent = () => (
  <TextLink to="/auth/login" color="primary">
    로그인으로 이동
  </TextLink>
);

const FindPasswordPage = () => {
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
    >
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <AuthFormInput
          id="email"
          type="email"
          label="이메일"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <Button buttonType="fullWidth" disabled={!isValid || !isDirty}>
          비밀번호 재설정
        </Button>
      </form>
    </AuthFormTemplate>
  );
};

export default FindPasswordPage;
