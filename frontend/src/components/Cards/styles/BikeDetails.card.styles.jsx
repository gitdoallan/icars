import { Box, Typography, Rating } from '@mui/material';

export const CardDetails = ({ children }) => (
  <Box
    marginTop={{ xs: 3, md: 0 }}
  >
    {children}
  </Box>

);

export const CardDetailsText = ({ children }) => (
  <Typography
    sx={{
      fontSize: 16,
      fontWeight: 500,
      color: 'text.primary',
      marginBottom: 1,
    }}
  >
    {children}
  </Typography>
);

export const CardDetailsRating = ({ children }) => (
  <Rating name="read-only" value={children} precision={0.5} readOnly />
);
