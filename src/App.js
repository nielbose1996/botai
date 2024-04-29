// src/App.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Container } from '@mui/material';
import Chat from './components/Chat/Chat';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackList from './components/FeedbackList/FeedbackList';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { ChatContext, ChatProvider } from './context/ChatContext';
import './App.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#6A4C93', 
    },
    secondary: {
      main: '#9B72AA', 
    },
    background: {
      default: '#EDE7F6', 
      paper: '#F3E5F5', 
    },
    text: {
      primary: '#4A4A4A', 
      secondary: '#6E6E6E', 
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu', 'Open Sans', 'sans-serif'
    ].join(','),
  },
  components: {

  },
});

const App = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]); 
 
  useEffect(() => {
    
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setFeedbacks(savedFeedbacks);
  }, []);


  const handleCloseFeedback = () => {
    setIsFeedbackOpen(false);
  };

  const handleSubmitFeedback = (feedbackData) => {
    const newFeedbacks = [...feedbacks, feedbackData];
    setFeedbacks(newFeedbacks);
    localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks));
  };


  const handleOpenFeedback = () => {
    setIsFeedbackOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatProvider>
        <CssBaseline />
        <Container maxWidth="sm">
      <ThemeToggle />
      <Chat onEndChat={handleOpenFeedback} />
      <FeedbackForm 
        open={isFeedbackOpen} 
        handleClose={handleCloseFeedback} 
        submitFeedback={handleSubmitFeedback} 
      />
      <FeedbackList feedbacks={feedbacks} />
    </Container>
      </ChatProvider>
    </ThemeProvider>
  );
};

export default App;
