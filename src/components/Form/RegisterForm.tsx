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
import { FaceBookLoginButton, GoogleLoginButton } from '../OAuth';
import { TextLink } from '../Link/TextLink';
import Logo from '../Logo';
import { FormErrorMessage } from './FormErrorMessage';

interface IRegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  error?: string;
}

export const RegisterForm = () => {
  const [registerFromData, setRegisterFormData] = useState<IRegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setRegisterFormData({
      ...registerFromData,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegisterFormData({ ...registerFromData, error: '준비중입니다.' });
    console.log(registerFromData);
  };

  return (
    <FormContainer>
      <FormLogo>
        <Logo />
      </FormLogo>
      <FormHeader>
        <h1>회원가입</h1>
      </FormHeader>
      <div>
        <GoogleLoginButton />
        <FaceBookLoginButton />
      </div>
      <Seperator />
      <FormBody>
        {registerFromData.error && (
          <FormErrorMessage errorMsg={registerFromData.error} />
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
          <FormLabel htmlFor="confirm-password">비밀번호 확인</FormLabel>
          <FormInput
            id="confirm-password"
            type="password"
            placeholder="다시 한번 비밀번호 입력하세요."
            onChange={(e) => onChange(e)}
          />
          <FormSubmitInput type="submit">이메일로 가입</FormSubmitInput>
        </form>
      </FormBody>
      <Seperator />
      <FormFooter>
        이미 가입하셨나요?{' '}
        <TextLink to="/auth/login" label="로그인" type="primary" />
      </FormFooter>
    </FormContainer>
  );
};
