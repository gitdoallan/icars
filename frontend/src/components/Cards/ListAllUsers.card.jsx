import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function ListAllUsersCard({
  id, name, email, role,
}) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.CardDetailsText>
        User ID:
        {' '}
        {id}
        {' '}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Name:
        {' '}
        {name}
        {' '}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Email:
        {' '}
        {email}
        {' '}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Role:
        {' '}
        {role}
        {' '}
      </S.CardDetailsText>
      <S.CardDetailsText>
        <S.DetailsPage onClick={() => navigate(`/admin/user/${id}`)}>Manage User</S.DetailsPage>
      </S.CardDetailsText>
      <S.Divider />
    </S.Container>
  );
}

ListAllUsersCard.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  email: propTypes.string,
  role: propTypes.string,
}.isRequired;
