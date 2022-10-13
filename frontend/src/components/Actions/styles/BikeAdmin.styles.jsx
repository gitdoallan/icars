import { Button } from '@mui/material';

export const BikeManagerBtn = ({ children, ...rest }) => (
  <Button
    type="button"
    variant="outlined"
    sx={{
      margin: '2rem 1rem 0 0',
    }}
    {...rest}
  >
    {children}
  </Button>
);
