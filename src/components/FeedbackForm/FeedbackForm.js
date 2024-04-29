// FeedbackForm.js
import React, { useState } from 'react';
import { Modal, Box, Typography, Rating, TextField, Button } from '@mui/material';

const FeedbackForm = ({ open, handleClose, submitFeedback }) => {
  const [rating, setRating] = useState(2.5);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    submitFeedback({ rating, comment });
    setRating(2.5); // Reset the rating
    setComment(''); // Reset the comment
    handleClose(); // Close the modal
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        outline: 'none' // Removing the focus outline
      }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Your Feedback
        </Typography>
        <Box sx={{ mt: 2, mb: 3 }}>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={handleRatingChange}
            precision={0.5}
          />
        </Box>
        <TextField
          fullWidth
          id="feedback-comment"
          label="Additional comments"
          multiline
          rows={4}
          value={comment}
          onChange={handleCommentChange}
          variant="outlined"
        />
        <Box sx={{ mt: 2 }}>
          <Button color="primary" variant="contained" fullWidth onClick={handleSubmit}>
            Submit Feedback
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FeedbackForm;
