import { Typography, Box } from '@mui/material';

export const Title = ({ children }) => (
  <Typography
    sx={{
      fontSize: '2rem',
      fontWeight: 'bold',
      margin: { xs: '2rem 0 1rem 0', md: '1rem 0' },
    }}
  >
    {children}
  </Typography>
);

export const DetailsContainer = ({ children }) => (
  <Box>
    {children}
  </Box>
);

export const Text = ({ children }) => (
  <Typography
    sx={{
      fontSize: '1.2rem',
      margin: '0.5rem 0',
    }}
  >
    {children}
  </Typography>
);
