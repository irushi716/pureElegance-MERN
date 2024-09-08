import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import axios from '../../api/api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/register', { name, email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      window.location = '/';
    } catch (error) {
      console.error('Error registering');
    }
  };

  return (
    <Box component="form" onSubmit={handleRegister}>
      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </Box>
  );
};

export default Register;
