import propTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCarsById } from 'api';
import { StatusMessages } from 'components/StatusMessages';
import * as S from './styles';

export function CarAdminActions({ id }) {
  const [status, setStatus] = useState({ status: false });
  const navigate = useNavigate();

  const handleDeleteCar = async () => {
    try {
      const result = await deleteCarsById(id);
      setStatus({ status: true, message: result.message, type: 'success' });
    } catch (err) {
      setStatus({ status: true, message: 'Sorry. We cannot delete this car right now.', type: 'error' });
    }
  };
  return (
    <div>
      <div>
        <StatusMessages {...status} />
      </div>
      <S.CarManagerBtn type="button" onClick={() => navigate(`/admin/car/${id}/update`)}>Edit Car</S.CarManagerBtn>
      <S.CarManagerBtn type="button" onClick={handleDeleteCar}>Delete Car</S.CarManagerBtn>
    </div>
  );
}

CarAdminActions.propTypes = {
  id: propTypes.number.isRequired,
};
