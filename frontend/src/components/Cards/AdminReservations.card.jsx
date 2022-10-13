import propTypes from 'prop-types';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function AdminReservationsCard({
  id, startDate, endDate, user,
}) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.CardDetailsText>
        Reservation ID:
        {' '}
        {id}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Period:
        {' '}
        {dayjs(startDate).format('DD/MM/YYYY')}
        {' '}
        -
        {' '}
        {dayjs(endDate).format('DD/MM/YYYY')}
        {' '}
      </S.CardDetailsText>
      <S.CardDetailsText>
        User:
        {' '}
        {user.id}
      </S.CardDetailsText>
      <S.CardDetailsText>
        <S.DetailsPage onClick={() => navigate(`/reservations/${id}`)}>Manage Reservation</S.DetailsPage>
      </S.CardDetailsText>
      <S.Divider />
    </S.Container>
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
