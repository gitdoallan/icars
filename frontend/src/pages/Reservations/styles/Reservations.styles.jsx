import { Typography, Button } from '@mui/material';

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

export const Text = ({ children }) => (
  <Typography
    variant="body1"
    sx={{
      fontSize: '1rem',
      margin: '1rem 0',
    }}
  >
    {children}
  </Typography>
);

export const DetailsPage = ({ children, ...rest }) => (
  <Button
    variant="outlined"
    size="small"
    sx={{
      margin: '1rem 0',
    }}
    {...rest}
  >
    {children}
  </Button>
);
