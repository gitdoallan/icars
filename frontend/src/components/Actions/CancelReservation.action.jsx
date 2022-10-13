import propTypes from 'prop-types';
import { cancelReservation } from 'api';
import * as S from './styles';

export function CancelReservationAction({ id, setStatus }) {
  const handleCancelReservation = async () => {
    try {
      await cancelReservation(id);
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
    <S.CancelReservation onClick={handleCancelReservation}>
      Cancel Reservation
    </S.CancelReservation>
  );
}

CancelReservationAction.propTypes = {
  id: propTypes.number.isRequired,
  setStatus: propTypes.func.isRequired,
};
