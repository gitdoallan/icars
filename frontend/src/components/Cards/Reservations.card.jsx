import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function ReservationsCard({ id, bike, orderStatus }) {
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
      <Link to={`/reservations/${id}`}>Details</Link>
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
