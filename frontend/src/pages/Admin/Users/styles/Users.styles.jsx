import { Typography } from '@mui/material';

export const Title = ({ children }) => (
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: 30,
      color: 'text.primary',
      marginBottom: 1,
    }}
  >
    {children}
  </Typography>
);
