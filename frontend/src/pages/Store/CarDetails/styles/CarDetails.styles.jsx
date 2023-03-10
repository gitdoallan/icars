import { CardMedia, Box } from '@mui/material';

export const CarImage = ({ children, ...rest }) => (
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

export const CarDetailsContainer = ({ children }) => (
  <Box
    maxWidth={{ sm: 600, md: 900 }}
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
