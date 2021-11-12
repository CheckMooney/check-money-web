import React, { useEffect } from 'react';
import { LoginForm } from 'components/auth/AuthForm';
import { LoginVariables } from 'types/auth';
import { useLoginMutation } from 'services/queries/auth';
import { useUserContext } from 'contexts/UserContext';
import useErrorMessage from 'hooks/useErrorMessage';

export const LoginPage = () => {
  const { login } = useUserContext();
  const { errorMessage, handleError } = useErrorMessage();
  const {
    mutate: loginMutation,
    isLoading,
    isError,
    error,
  } = useLoginMutation();

  const onLoginRequest = ({ email, password }: LoginVariables) => {
    loginMutation(
      { email, password },
      {
        onSuccess: ({ refresh_token, access_token }) => {
          login(refresh_token, access_token);
        },
      },
    );
  };

  useEffect(() => {
    if (isError) {
      handleError(error);
    }
  }, [isError, error, handleError]);

  return (
    <LoginForm
      onSubmit={onLoginRequest}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};
