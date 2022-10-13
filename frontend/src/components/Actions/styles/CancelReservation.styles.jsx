import { Button } from '@mui/material';

export const CancelReservation = ({ children, ...props }) => (
  <Button
    type="button"
    variant="outlined"
    sx={{
      marginTop: '2rem',
    }}
    {...props}
  >
    {children}
  </Button>
);
