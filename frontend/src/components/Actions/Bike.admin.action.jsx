import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function BikeAdminActions({ id }) {
  return (
    <>
      <Link to={`/admin/bike/${id}/edit`}>Edit Bike</Link>
      {' - '}
      <Link to={`/admin/bike/${id}/delete`}>Delete Bike</Link>
    </>
  );
}

BikeAdminActions.propTypes = {
  id: propTypes.number.isRequired,
};
