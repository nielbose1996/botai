// Chat.js
import React, { useState, useContext, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import ChatMessage from '../ChatMessage/ChatMessage';
import { ChatContext, ChatProvider } from '../../context/ChatContext';
import mockData from '../../utils/mockData.json';
import './Chat.css';

const Chat = ({onEndChat}) => {
  const [input, setInput] = useState('');
  const { messages } = useContext(ChatContext);
  const { sendMessage } = useContext(ChatContext);



  const handleSend = () => {
    if (input.trim() !== '') {
      sendMessage(input);
      setInput('');
      onEndChat(); 
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    mockData.forEach((data) => {
      sendMessage(data.response);
    });
  }, []);

  return (
    <Box className="chat-container">
      <Box className="messages-container">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </Box>
      <Box className="input-container">
        <TextField
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          fullWidth
          label="Type your message here..."
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;