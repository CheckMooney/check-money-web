import React, { useEffect } from 'react';
import { useRegisterContext } from 'contexts/RegisterContext';
import {
  ConfirmEmailForm,
  ConfirmCodeForm,
  RegisterForm,
} from 'components/auth/AuthForm';

export const RegisterPage = () => {
  const { isEmailConfirmed, isCodeConfirmed, setInitialState } =
    useRegisterContext();

  useEffect(() => {
    return () => {
      setInitialState();
    };
  }, [setInitialState]);

  if (isEmailConfirmed && isCodeConfirmed) {
    return <RegisterForm />;
  }
  if (isEmailConfirmed) {
    return <ConfirmCodeForm />;
  }
  return <ConfirmEmailForm />;
};
