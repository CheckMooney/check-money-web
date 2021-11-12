import React, { createContext, useCallback, useContext, useState } from 'react';

interface Value {
  isEmailConfirmed: boolean;
  isCodeConfirmed: boolean;
  currentEmail: string;
  confirmEmail: (email: string) => void;
  confirmCode: () => void;
  setInitialState: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const RegisterContext = createContext<Value>({
  isEmailConfirmed: false,
  isCodeConfirmed: false,
  currentEmail: '',
  confirmEmail: () => {},
  confirmCode: () => {},
  setInitialState: () => {},
});

export const useRegisterContext = () => useContext(RegisterContext);

export const RegisterContextProvider = ({ children }: Props) => {
  const [isEmailConfirmed, setIsEmailConfirmed] = useState<boolean>(false);
  const [isCodeConfirmed, setIsCodeConfirmed] = useState<boolean>(false);
  const [currentEmail, setCurrentEmail] = useState<string>('');

  const confirmEmail = (email: string) => {
    setIsEmailConfirmed(true);
    setCurrentEmail(email);
  };

  const confirmCode = () => {
    setIsCodeConfirmed(true);
  };

  const setInitialState = useCallback(() => {
    setIsEmailConfirmed(false);
    setIsCodeConfirmed(false);
    setCurrentEmail('');
  }, []);

  return (
    <RegisterContext.Provider
      value={{
        isEmailConfirmed,
        isCodeConfirmed,
        currentEmail,
        confirmEmail,
        confirmCode,
        setInitialState,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
