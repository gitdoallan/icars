import { useState } from 'react';
import { Rating } from '@mui/material';
import { rateReservation } from 'api';
import { StatusMessages } from 'components/StatusMessages';
import * as S from './styles';

export function RateOrderAction({ orderId, carId }) {
  const [status, setStatus] = useState({ status: false });
  const handleRateReservation = async (rate) => {
    try {
      await rateReservation({ orderId, carId, rate });
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
    <S.BoxContainer>
      {!status.status && (
        <S.RatingContainer>
          <S.RatingLabel>Rating: </S.RatingLabel>
          <Rating
            defaultValue={0}
            onChange={(_e, newValue) => {
              handleRateReservation(newValue);
            }}
          />
        </S.RatingContainer>
      )}
      <StatusMessages {...status} />
    </S.BoxContainer>
  );
}
