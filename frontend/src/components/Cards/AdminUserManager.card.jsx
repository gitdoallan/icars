import propTypes from 'prop-types';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function AdminUserManagerCard({
  id, startDate, endDate, orderStatus, orderTotal,
}) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.CardDetailsText>
        ID:
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
        Status:
        {' '}
        {orderStatus}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Total:
        {' '}
        {orderTotal}
      </S.CardDetailsText>
      <S.CardDetailsText>
        <S.DetailsPage onClick={() => navigate(`/reservations/${id}`)}>Manage Reservation</S.DetailsPage>
      </S.CardDetailsText>
      <S.Divider />
    </S.Container>
  );
}

AdminUserManagerCard.propTypes = {
  id: propTypes.number,
  startDate: propTypes.string,
  endDate: propTypes.string,
  orderStatus: propTypes.string,
  orderTotal: propTypes.number,
}.isRequired;
