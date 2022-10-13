import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function ReservationsCard({ id, bike, orderStatus }) {
  const navigate = useNavigate();
  return (
    <S.ReservationsContainer>
      <S.CardDetailsText>
        ID:
        {' '}
        {id}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Model:
        {' '}
        {bike.bikeModel.name}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Status:
        {' '}
        {orderStatus}
      </S.CardDetailsText>
      <S.DetailsPage onClick={() => navigate(`/reservations/${id}`)}>Details</S.DetailsPage>
      <S.Divider />
    </S.ReservationsContainer>
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
