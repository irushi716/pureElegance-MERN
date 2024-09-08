import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <Box>
      {cart.items.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        cart.items.map((item) => (
          <Box key={item.id} display="flex" justifyContent="space-between">
            <Typography>{item.name}</Typography>
            <Typography>{item.price}</Typography>
            <Button onClick={() => removeItem(item.id)}>Remove</Button>
          </Box>
        ))
      )}
      <Button component={Link} to="/checkout" variant="contained" color="primary">
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;
