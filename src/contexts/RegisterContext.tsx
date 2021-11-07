import React, { createContext, useCallback, useContext, useState } from 'react';

interface RegisterState {
  isEmailConfirmed: boolean;
  isCodeConfirmed: boolean;
  currentEmail: string;
  confirmEmail: (email: string) => void;
  confirmCode: () => void;
  setInitialState: () => void;
}

const initialState: RegisterState = {
  isEmailConfirmed: false,
  isCodeConfirmed: false,
  currentEmail: '',
  confirmEmail: () => {},
  confirmCode: () => {},
  setInitialState: () => {},
};

export const RegisterContext = createContext<RegisterState>(initialState);
export const useRegisterContext = () => useContext(RegisterContext);

const RegisterContextProvider: React.FC = ({ children }) => {
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

export default RegisterContextProvider;
