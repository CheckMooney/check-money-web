import Snackbar from 'components/Snackbar';
import { SNACKBAR_DURATION, SNACKBAR_MAX_NUM } from 'constants/snackbar';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Props {
  children: React.ReactNode;
}

interface Value {
  pushSnackbarMessage: (message: string) => void;
}

interface Message {
  id: number;
  text: string;
}

const SnackbarContext = createContext<Value>({
  pushSnackbarMessage: () => {},
});

export const useSnackbarContext = () => useContext(SnackbarContext);

const generateSnackbarId = (() => {
  let id = 0;
  return () => id++;
})();

export const SnackbarContextProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const totalMessages = messages.length;

  const pushSnackbarMessage = useCallback((message: string) => {
    setMessages((messages) => {
      const newMessage: Message = {
        id: generateSnackbarId(),
        text: message,
      };
      const newMessages = [...messages, newMessage];
      if (newMessages.length === SNACKBAR_MAX_NUM + 1) {
        return newMessages.slice(1);
      }
      return newMessages;
    });
  }, []);

  useEffect(() => {
    if (totalMessages > 0) {
      const timer = setTimeout(() => {
        setMessages((messages) => messages.slice(1));
      }, SNACKBAR_DURATION);
      return () => clearTimeout(timer);
    }
  }, [totalMessages]);

  return (
    <SnackbarContext.Provider value={{ pushSnackbarMessage }}>
      {children}
      {messages.map((message, index, arr) => (
        <Snackbar key={message.id} order={arr.length - index}>
          {message.text}
        </Snackbar>
      ))}
    </SnackbarContext.Provider>
  );
};
