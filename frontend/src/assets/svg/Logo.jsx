import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';

export function Logo() {
  const { userInfo } = useSelector((state) => state);
  return (
    <Link
      component={RouterLink}
      to={userInfo.isLogged ? '/store' : '/'}
      underline="none"
    >
      <Box display="flex" alignItems="center">
        <Box>
          <DirectionsCarIcon color="primary" />
        </Box>
        <Typography marginLeft={1} color="primary" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          iCars
        </Typography>
      </Box>
    </Link>
  );
}
