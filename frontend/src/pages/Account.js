import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import axios from '../api/api';

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      setUser(userInfo);
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location = '/';
  };

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Typography variant="h4">Hello, {user.name}!</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Account;
