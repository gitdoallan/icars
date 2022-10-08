import { CardMedia, Box } from '@mui/material';

export const BikeImage = ({ children, ...rest }) => (
  <CardMedia
    component="img"
    sx={{
      maxWidth: 500,
      width: '100%',
      borderRadius: 2,
    }}
    {...rest}
  >
    {children}
  </CardMedia>
);

export const BikeDetailsContainer = ({ children }) => (
  <Box
    maxWidth={{ sm: 600, md: 800 }}
    width="100%"
    margin="0 auto"
    paddingX={2}
    display="flex"
    flexWrap="wrap"
    justifyContent={{ xs: 'flex-start', md: 'space-around' }}
  >
    {children}
  </Box>
);
