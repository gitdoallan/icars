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
          <Link to={`/admin/user/${user.id}`}>Manage</Link>
        </span>
      </div>

    </div>
  );
}
