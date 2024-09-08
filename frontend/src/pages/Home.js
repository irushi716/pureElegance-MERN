import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Typography variant="h3">Welcome to Cosmetics App!</Typography>
      <Typography variant="h5">Your beauty, our priority.</Typography>
      <Link to="/items">
        <Typography variant="h6" sx={{ mt: 2 }}>Shop Now</Typography>
      </Link>
    </Box>
  );
};

export default Home;
