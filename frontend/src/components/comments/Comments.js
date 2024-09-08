import { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from '../../api/api';

const Comments = ({ itemId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(`/api/comments/${itemId}`);
      setComments(data);
    };
    fetchComments();
  }, [itemId]);

  const handleSubmit = async () => {
    await axios.post('/api/comments/create', { itemId, text: newComment });
    setNewComment('');
    // Refresh comments
  };

  return (
    <Box>
      {comments.map((comment) => (
        <Typography key={comment._id}>{comment.text}</Typography>
      ))}
      <TextField
        label="New Comment"
        fullWidth
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
        Add Comment
      </Button>
    </Box>
  );
};

export default Comments;
