import React, { useState } from 'react';
import {
  FormBody,
  FormContainer,
  FormFooter,
  FormHeader,
  FormInput,
  FormLabel,
  FormLogo,
  FormSubmitInput,
  Seperator,
} from './styles';
import Logo from '../Logo';
import { TextLink } from '../Link/TextLink';
import { FormErrorMessage } from './FormErrorMessage';

interface IFindPasswordFormData {
  email: string;
  password: string;
  error?: string;
}

export const FindPasswordForm = () => {
  const [findPasswordFormData, setFindPasswordFormData] =
    useState<IFindPasswordFormData>({
      email: '',
      password: '',
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFindPasswordFormData({
      ...findPasswordFormData,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(findPasswordFormData);
    setFindPasswordFormData({
      ...findPasswordFormData,
      error: '준비중입니다.',
    });
  };

  return (
    <FormContainer>
      <FormLogo>
        <Logo />
      </FormLogo>
      <FormHeader>
        <h1>비밀번호를 잊어버리셨나요?</h1>
        <p>비밀번호를 재설정하기 위해, 이메일 주소를 입력하세요.</p>
      </FormHeader>
      <FormBody>
        {findPasswordFormData.error && (
          <FormErrorMessage errorMsg={findPasswordFormData.error} />
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormLabel htmlFor="email">이메일</FormLabel>
          <FormInput
            id="email"
            type="email"
            autoFocus={true}
            placeholder="이메일을 입력하세요."
            onChange={(e) => onChange(e)}
          />
          <FormSubmitInput type="submit">비밀번호 재설정</FormSubmitInput>
        </form>
      </FormBody>
      <Seperator />
      <FormFooter>
        <TextLink to="/auth/login" label="로그인하러가기" type="primary" />
      </FormFooter>
    </FormContainer>
  );
};
