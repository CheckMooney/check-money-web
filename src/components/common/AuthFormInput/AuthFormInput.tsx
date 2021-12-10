import React from 'react';
import { Input, InputError, Label, Wrapper } from './AuthFormInput.style';

interface AuthFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errorMessage?: string;
}

const AuthFormInput = React.forwardRef<HTMLInputElement, AuthFormInputProps>(
  ({ id, label, errorMessage, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input ref={ref} id={id} {...props} />
        {errorMessage && <InputError>{errorMessage}</InputError>}
      </Wrapper>
    );
  },
);

export default AuthFormInput;
