import { createContext, useContext, useState } from 'react';
import { setAccessToken } from 'storages';

export interface UserState {
  isLoggedIn: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserState>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const useUserContext = () => useContext(UserContext);

const UserContextProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (accessToken: string) => {
    setAccessToken(accessToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setAccessToken('');
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
