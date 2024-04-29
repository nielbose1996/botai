import React, { createContext, useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import useLocalStorage from '../hooks/useLocalStorage';

const ChatContext = createContext({
  messages: [],
  sendMessage: () => {},
  likeMessage: () => {},
  dislikeMessage: () => {},
  themeMode: 'light',
  toggleTheme: () => {},
});

const ChatProvider = ({ children }) => {
  // Using useLocalStorage to persist messages and theme mode
  const [messages, setMessages] = useLocalStorage('messages', []);
  const [themeMode, setThemeMode] = useLocalStorage('themeMode', 'light');

  const sendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      isOwnMessage: true,
      likes: 0,
      dislikes: 0,
    };
    setMessages([...messages, newMessage]);
  };

  const likeMessage = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
    ));
  };

  const dislikeMessage = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, dislikes: msg.dislikes + 1 } : msg
    ));
  };

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Memoize theme object to prevent unnecessary re-renders
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <ChatContext.Provider value={{ messages, sendMessage, likeMessage, dislikeMessage, themeMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
