import React from 'react';

import * as Styled from './styles';

interface AuthFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errorMsg?: string;
}

export const AuthFormInput = React.forwardRef<
  HTMLInputElement,
  AuthFormInputProps
>(({ id, label, errorMsg, ...inputProps }, ref) => {
  return (
    <Styled.AuthFormInputWrapper>
      <Styled.AuthFormInputLabel htmlFor={id}>
        {label}
      </Styled.AuthFormInputLabel>
      <Styled.AuthFormInput ref={ref} id={id} {...inputProps} />
      {errorMsg && (
        <Styled.AuthFormInputError>{errorMsg}</Styled.AuthFormInputError>
      )}
    </Styled.AuthFormInputWrapper>
  );
});
