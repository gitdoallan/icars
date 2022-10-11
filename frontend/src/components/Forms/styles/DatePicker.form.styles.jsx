import { Stack as MUIStack } from '@mui/material';

export const Stack = ({ children }) => (
  <MUIStack
    display="flex"
    flexDirection="row"
    marginTop={2}
  >
    {children}
  </MUIStack>
);
