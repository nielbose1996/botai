// ThemeToggle.js
import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';  
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import { ChatContext } from '../../context/ChatContext'; 

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useContext(ChatContext); // Using themeMode and toggleTheme from ChatContext

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
