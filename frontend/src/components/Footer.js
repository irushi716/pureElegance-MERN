import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', p: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Cosmetics App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
