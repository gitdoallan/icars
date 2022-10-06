import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Box, Typography } from '@mui/material';

export function Logo() {
  return (
    <Box display="flex" alignItems="center">
      <Box>
        <DirectionsBikeIcon color="primary" />
      </Box>
      <Typography marginLeft={1} color="primary" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        iBikes
      </Typography>
    </Box>
  );
}
