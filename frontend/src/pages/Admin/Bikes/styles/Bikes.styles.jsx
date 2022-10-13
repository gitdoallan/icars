import { Button } from '@mui/material';

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
