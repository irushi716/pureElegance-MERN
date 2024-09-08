import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from '../../api/api';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get('/api/items');
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <Box display="flex" flexWrap="wrap">
      {items.map((item) => (
        <Card key={item._id} sx={{ margin: 2, width: 200 }}>
          <CardContent>
            <Typography variant="h6">{item.name}</Typography>
            <Typography>${item.price}</Typography>
            <Button component={Link} to={`/items/${item._id}`} variant="contained">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ItemList;
