import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import axios from '../../api/api';
import Comments from '../comments/Comments';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await axios.get(`/api/items/${id}`);
      setItem(data);
    };
    fetchItem();
  }, [id]);

  if (!item) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Typography variant="h4">{item.name}</Typography>
      <Typography variant="h6">Price: ${item.price}</Typography>
      <Button variant="contained" color="primary">Add to Cart</Button>
      <Comments itemId={id} />
    </Box>
  );
};

export default ItemDetail;
