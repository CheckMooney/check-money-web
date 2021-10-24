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
import { FormErrorMessage } from './FormErrorMessage';
import { FaceBookLoginButton, GoogleLoginButton } from '../OAuth';
import { TextLink } from '../Link/TextLink';
import Logo from '../Logo';

interface ILoginFormData {
  email: string;
  password: string;
  error?: string;
}

export const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState<ILoginFormData>({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [id]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginFormData);
    setLoginFormData({ ...loginFormData, error: '준비중입니다' });
  };

  return (
    <FormContainer>
      <FormLogo>
        <Logo />
      </FormLogo>
      <FormHeader>
        <h1>로그인</h1>
      </FormHeader>
      <div>
        <GoogleLoginButton />
        <FaceBookLoginButton />
      </div>
      <Seperator />
      <FormBody>
        {loginFormData.error && (
          <FormErrorMessage errorMsg={loginFormData.error} />
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
          <FormLabel htmlFor="password">비밀번호</FormLabel>
          <FormInput
            id="password"
            type="password"
            placeholder="비밀번호 입력하세요."
            onChange={(e) => onChange(e)}
          />
          <FormSubmitInput type="submit">로그인</FormSubmitInput>
        </form>
        <TextLink to="/auth/find-password" label="비밀번호를 잊어버리셨나요?" />
      </FormBody>
      <Seperator />
      <FormFooter>
        계정이 없으신가요?{' '}
        <TextLink to="/auth/register" label="회원가입" type="primary" />
      </FormFooter>
    </FormContainer>
  );
};
