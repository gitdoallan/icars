import { Button, Box } from '@mui/material';

export const CreateNewBikeBtn = ({ children, ...rest }) => (
  <Button
    variant="contained"
    size="large"
    sx={{
      margin: '1rem 0',
    }}
    {...rest}
  >
    {children}
  </Button>
);

export const BikesContainer = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      gap: '1rem',
    }}
  >
    {children}
  </Box>
);
