import { Button } from '@mui/material';

export const RentNowButton = ({ children, ...rest }) => (
  <Button
    variant="contained"
    sx={{ margin: '1rem auto', width: '100%', height: 50 }}
    {...rest}
  >
    {children}
  </Button>
);
