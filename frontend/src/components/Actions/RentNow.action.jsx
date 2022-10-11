import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StatusMessages } from 'components/StatusMessages';
import { isBikeAvailable, rentBike } from 'api';
import * as S from './styles';

export function RentNowAction({ id }) {
  const [available, setAvailable] = useState(false);
  const { startDate, endDate } = useSelector((state) => state.filters);
  const navigate = useNavigate();

  const handleRentBike = async () => {
    try {
      const { orderId } = await rentBike({ id, startDate, endDate });
      navigate(`/reservations/${orderId}`);
    } catch (err) {
      setAvailable(false);
    }
  };

  useEffect(() => {
    isBikeAvailable({ id, startDate, endDate })
      .then((response) => available !== response && setAvailable(response))
      .catch(() => setAvailable(false));
  }, [startDate, endDate]);

  return (
    <>
      <S.RentNowButton
        type="button"
        disabled={!available}
        onClick={handleRentBike}
      >
        Rent now
      </S.RentNowButton>
      <StatusMessages
        status={!available}
        message="This bike is not available for the selected dates"
        type="error"
      />
    </>
  );
}

RentNowAction.propTypes = {
  id: propTypes.number.isRequired,
};
