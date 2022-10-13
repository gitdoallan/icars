import { Typography } from '@mui/material';

export const Title = ({ children, ...rest }) => (
  <Typography
    variant="h4"
    sx={{
      fontWeight: 'bold',
      fontSize: '1.5rem',
      margin: '2rem 0',
    }}
    {...rest}
  >
    {children}
  </Typography>
);
