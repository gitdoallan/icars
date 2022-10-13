import propTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteBikesById } from 'api';
import { StatusMessages } from 'components/StatusMessages';

export function BikeAdminActions({ id }) {
  const [status, setStatus] = useState({ status: false });

  const handleDeleteBike = async () => {
    try {
      const result = await deleteBikesById(id);
      setStatus({ status: true, message: result.message, type: 'success' });
    } catch ({ response }) {
      setStatus({ status: true, message: response.data.message, type: 'error' });
    }
  };
  return (
    <div>
      <div>
        <StatusMessages {...status} />
      </div>
      <Link to={`/admin/bike/${id}/update`}>Edit Bike</Link>
      {' - '}
      <button type="button" onClick={handleDeleteBike}>Delete Bike</button>
    </div>
  );
}

BikeAdminActions.propTypes = {
  id: propTypes.number.isRequired,
};
