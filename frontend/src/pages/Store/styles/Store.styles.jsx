import { Typography } from '@mui/material';

export const Title = ({ children }) => (
  <Typography
    sx={{
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: { xs: '2rem 0', md: '1rem 0' },
    }}
  >
    {children}
  </Typography>
);
