// FeedbackList.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Rating, Box, Typography } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';

const FeedbackList = ({ feedbacks }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Past Feedback
      </Typography>
      <List>
        {feedbacks.map((feedback, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Rating value={feedback.rating} readOnly />}
              secondary={feedback.comment}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FeedbackList;
