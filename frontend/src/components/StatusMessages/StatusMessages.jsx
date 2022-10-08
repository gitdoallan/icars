import propTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

export function StatusMessages({ message, type, status }) {
  return (
    <Box>
      {status && (
      <Box marginBottom={4}>
        <Typography
          variant="body2"
          sx={{
            color: `${type}.main`,
          }}
        >
          {message}
        </Typography>
      </Box>
      )}
    </Box>
  );
}

StatusMessages.propTypes = {
  message: propTypes.string,
  type: propTypes.string,
  status: propTypes.bool.isRequired,
};

StatusMessages.defaultProps = {
  message: '',
  type: 'error',
};
