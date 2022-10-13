import propTypes from 'prop-types';
import { cancelReservation } from 'api';
import * as S from './styles';

export function CancelReservationAction({ orderId, setStatus }) {
  const disabled = orderId === 0;
  const handleCancelReservation = async () => {
    try {
      await cancelReservation(orderId);
      setStatus({
        status: true,
        message: 'Reservation successfully cancelled.',
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
    <S.CancelReservation onClick={handleCancelReservation} disabled={disabled}>
      Cancel Reservation
    </S.CancelReservation>
  );
}

CancelReservationAction.propTypes = {
  orderId: propTypes.number,
  setStatus: propTypes.func.isRequired,
};

CancelReservationAction.defaultProps = {
  orderId: 0,
};
