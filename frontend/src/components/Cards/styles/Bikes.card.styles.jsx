import {
  Card, CardMedia, Typography, Box, Rating as MUIRating,
} from '@mui/material';

export const CardContainer = ({ children }) => (
  <Card sx={{ width: 345, marginBottom: 5 }}>
    {children}
  </Card>
);

export const CardImage = ({ children, ...rest }) => (
  <CardMedia
    component="img"
    height="250"
    {...rest}
  />
);

export const CardHeader = ({ children }) => (
  <Box
    justifyContent="space-between"
    display="flex"
  >
    {children}
  </Box>
);

export const CardTitle = ({ children }) => (
  <Typography variant="h6" component="div">
    { children }
  </Typography>
);

export const CardLocation = ({ children }) => (
  <Typography variant="body2" color="text.secondary">
    { children }
  </Typography>
);

export const CardBody = ({ children }) => (
  <Box
    display="flex"
    justifyContent="space-between"
  >
    { children }
  </Box>
);

export const CardRating = ({ children }) => (
  <MUIRating
    name="half-rating-read"
    value={children}
    precision={0.5}
    size="small"
    readOnly
  />
);

export const CardPrice = ({ children }) => (
  <Box>
    { children }
  </Box>
);
