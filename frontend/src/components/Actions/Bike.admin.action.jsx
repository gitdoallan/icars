import propTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBikesById } from 'api';
import { StatusMessages } from 'components/StatusMessages';
import * as S from './styles';

export function BikeAdminActions({ id }) {
  const [status, setStatus] = useState({ status: false });
  const navigate = useNavigate();

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
      <S.BikeManagerBtn type="button" onClick={() => navigate(`/admin/bike/${id}/update`)}>Edit Bike</S.BikeManagerBtn>
      <S.BikeManagerBtn type="button" onClick={handleDeleteBike}>Delete Bike</S.BikeManagerBtn>
    </div>
  );
}

BikeAdminActions.propTypes = {
  id: propTypes.number.isRequired,
};
