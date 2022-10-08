import { Typography, Box } from '@mui/material';

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

export const StoreContainer = ({ children }) => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width="100%"
    margin="0 auto"
    paddingX={2}
    paddingY={{ xs: 2, sm: 3, md: 4 }}
    display="flex"
    flexWrap="wrap"
    justifyContent="space-around"
  >
    {children}
  </Box>
);
