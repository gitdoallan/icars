import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function ReservationsCard({ id, bike, orderStatus }) {
  const navigate = useNavigate();
  return (
    <div>
      <span>
        ID:
        {' '}
        {id}
        {' '}
      </span>
      <span>
        Model:
        {' '}
        {bike.bikeModel.name}
        {' '}
      </span>
      <span>
        Status:
        {' '}
        {orderStatus}
        {' '}
      </span>
      <S.DetailsPage onClick={() => navigate(`/reservations/${id}`)}>Details</S.DetailsPage>
    </div>
  );
}

ReservationsCard.propTypes = {
  id: propTypes.number,
  bike: propTypes.shape({
    bikeModel: propTypes.shape({
      name: propTypes.string.isRequired,
    }).isRequired,
  }),
}.isRequired;
