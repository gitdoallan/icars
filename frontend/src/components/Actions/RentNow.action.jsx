import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StatusMessages } from 'components/StatusMessages';
import { isCarAvailable, rentCar } from 'api';
import * as S from './styles';

export function RentNowAction({ id }) {
  const [statusMessage, setStatusMessage] = useState({ status: false });
  const { startDate, endDate } = useSelector((state) => state.filters);
  const navigate = useNavigate();

  const handleRentCar = async () => {
    try {
      const { orderId } = await rentCar({ id, startDate, endDate });
      navigate(`/reservations/${orderId}`);
    } catch ({ response }) {
      setStatusMessage({ status: true, message: response.data.message, type: 'error' });
    }
  };

  useEffect(() => {
    isCarAvailable({ id, startDate, endDate })
      .then(() => setStatusMessage({ status: false }))
      .catch(({ response }) => setStatusMessage(
        { status: true, message: response.data.message, type: 'error' },
      ));
  }, [startDate, endDate]);

  return (
    <>
      <S.RentNowButton
        type="button"
        disabled={statusMessage.status}
        onClick={handleRentCar}
      >
        Rent now
      </S.RentNowButton>
      <StatusMessages {...statusMessage} />
    </>
  );
}

RentNowAction.propTypes = {
  id: propTypes.number.isRequired,
};
