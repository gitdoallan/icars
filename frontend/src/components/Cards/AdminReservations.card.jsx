import propTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export function AdminReservationsCard({
  id, startDate, endDate, user,
}) {
  return (
    <div>
      <div>
        <span>
          Reservation ID:
          {' '}
          {id}
          {' '}
          <Link to={`/reservations/${id}`}>Details</Link>
        </span>
        <span>
          Period:
          {' '}
          {dayjs(startDate).format('DD/MM/YYYY')}
          {' '}
          -
          {' '}
          {dayjs(endDate).format('DD/MM/YYYY')}
          {' '}
        </span>
        <span>
          User:
          {' '}
          {user.id}
          {' '}
          <Link to={`/admin/user/${user.id}`}>Manage User</Link>
        </span>
      </div>

    </div>
  );
}

AdminReservationsCard.propTypes = {
  id: propTypes.number,
  startDate: propTypes.string,
  endDate: propTypes.string,
  user: propTypes.shape({
    id: propTypes.number,
  }).isRequired,
}.isRequired;
