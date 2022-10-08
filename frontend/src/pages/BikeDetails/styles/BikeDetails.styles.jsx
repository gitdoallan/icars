import { CardMedia } from '@mui/material';

export const BikeImage = ({ children, ...rest }) => (
  <CardMedia
    component="img"
    sx={{
      maxWidth: 500,
      width: '100%',
    }}
    {...rest}
  >
    {children}
  </CardMedia>
);
