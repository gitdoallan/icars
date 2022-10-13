import { useState } from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { rateReservation } from 'api';
import { StatusMessages } from 'components/StatusMessages';

export function RateOrderAction({ orderId, bikeId }) {
  const [status, setStatus] = useState({ status: false });
  const handleRateReservation = async (rate) => {
    try {
      await rateReservation({ orderId, bikeId, rate });
      setStatus({
        status: true,
        message: 'Reservation successfully rated.',
        type: 'success',
      });
    } catch ({ response }) {
      setStatus({
        status: true,
        message: response.data.message,
        type: 'error',
      });
    }
  };
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      {!status.status && (
        <Box display="flex">
          <Typography component="legend">Rating: </Typography>
          <Rating
            defaultValue={0}
            onChange={(_e, newValue) => {
              handleRateReservation(newValue);
            }}
          />
        </Box>
      )}
      <StatusMessages {...status} />
    </Box>
  );
}
