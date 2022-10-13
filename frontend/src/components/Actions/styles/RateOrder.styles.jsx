import { Box, Typography } from '@mui/material';

export const BoxContainer = ({ children }) => (
  <Box sx={{ '& > legend': { mt: 2 } }}>
    {children}
  </Box>
);

export const RatingContainer = ({ children }) => (
  <Box display="flex">
    {children}
  </Box>
);

export const RatingLabel = ({ children }) => (
  <Typography
    component="legend"
    sx={{
      fontSize: '1.2rem',
      margin: '-0.2rem 0',
    }}
  >
    {children}
  </Typography>
);
