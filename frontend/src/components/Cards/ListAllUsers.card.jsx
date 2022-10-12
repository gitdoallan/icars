import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function ListAllUsersCard({
  id, name, email, role,
}) {
  return (
    <div>
      <div>
        <span>
          User ID:
          {' '}
          {id}
          {' '}
        </span>
        <span>
          Name:
          {' '}
          {name}
          {' '}
        </span>
        <span>
          Email:
          {' '}
          {email}
          {' '}
        </span>
        <span>
          Role:
          {' '}
          {role}
          {' '}
        </span>
        <span>
          <Link to={`/admin/user/${id}`}>Manage User</Link>
        </span>
      </div>
    </div>
  );
}

ListAllUsersCard.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  email: propTypes.string,
  role: propTypes.string,
}.isRequired;
