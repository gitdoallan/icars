import {
  Box, Typography, Rating, Divider as MUIDivider,
} from '@mui/material';

export const CardDetails = ({ children }) => (
  <Box
    marginTop={{ xs: 3, md: 0 }}
    sx={{ maxWidth: { sm: 500, md: 300 }, width: '100%' }}
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

export const ReservationsContainer = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: 'background.default',
    }}
  >
    {children}
  </Box>
);

export const Container = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: 'background.default',
    }}
  >
    {children}
  </Box>
);

export const Divider = () => (
  <MUIDivider
    sx={{
      width: '100%',
      margin: '1rem 0',
    }}
  />
);
