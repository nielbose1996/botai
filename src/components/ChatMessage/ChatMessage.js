// ChatMessage.js
import React, { useState, useContext } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { ChatContext, ChatProvider } from'../../context/ChatContext';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const { likeMessage } = useContext(ChatContext);
 
  const {dislikeMessage} = useContext(ChatContext);

  const handleLike = () => {
    setLike(!like);
    setDislike(false);
    likeMessage(message.id);
  };

  const handleDislike = () => {
    setDislike(!dislike);
    setLike(false);
    dislikeMessage(message.id);
  };

  return (
    <Card className={`message-card ${message.isOwnMessage ? 'own-message' : ''}`}>
      <CardContent>
        <Typography variant="body1">{message.text}</Typography>
        <div className="message-actions">
          <IconButton onClick={handleLike} color={like ? 'primary' : 'default'}>
            <ThumbUpAltIcon />
          </IconButton>
          <IconButton onClick={handleDislike} color={dislike ? 'secondary' : 'default'}>
            <ThumbDownAltIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatMessage;
