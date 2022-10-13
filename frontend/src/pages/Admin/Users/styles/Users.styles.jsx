import { Typography, Button } from '@mui/material';

export const Title = ({ children }) => (
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: 30,
      color: 'text.primary',
      marginTop: 3,
      marginBottom: 1,
    }}
  >
    {children}
  </Typography>
);

export const CreateBtn = ({ children, ...rest }) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: 'primary.main',
      marginBottom: 3,
      color: 'primary.contrastText',
      '&:hover': {
        backgroundColor: 'primary.dark',
      },
    }}
    {...rest}
  >
    {children}
  </Button>
);
