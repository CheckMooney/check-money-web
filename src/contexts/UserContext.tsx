import { createContext, useContext, useState } from 'react';
import {
  setAccessToken,
  setAccessTokenExpiredAt,
  setRefreshToken,
} from 'storages';

export interface Value {
  isLoggedIn: boolean;
  login: (refreshToken: string, accessToken: string) => void;
  logout: () => void;
  silentRefresh: () => void;
}

export interface Props {
  children: React.ReactNode;
}

const UserContext = createContext<Value>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  silentRefresh: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (refreshToken: string, accessToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setAccessTokenExpiredAt();
    setIsLoggedIn(true);
  };

  const logout = () => {
    setAccessToken('');
    setRefreshToken('');
    setAccessTokenExpiredAt('');
    setIsLoggedIn(false);
  };

  const silentRefresh = () => {
    setIsLoggedIn(true);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout, silentRefresh }}>
      {children}
    </UserContext.Provider>
  );
};
