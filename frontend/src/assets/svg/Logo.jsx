import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
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
          <DirectionsBikeIcon color="primary" />
        </Box>
        <Typography marginLeft={1} color="primary" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          iBikes
        </Typography>
      </Box>
    </Link>
  );
}
