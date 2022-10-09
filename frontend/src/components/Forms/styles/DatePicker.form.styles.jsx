import { Button, Stack as MUIStack } from '@mui/material';

export const BookNowButton = ({ children, ...rest }) => (
  <Button
    variant="contained"
    sx={{ margin: '1rem auto', width: '100%', height: 50 }}
    {...rest}
  >
    {children}
  </Button>
);

export const Stack = ({ children }) => (
  <MUIStack
    display="flex"
    flexDirection="row"
    marginTop={2}
  >
    {children}
  </MUIStack>
);
