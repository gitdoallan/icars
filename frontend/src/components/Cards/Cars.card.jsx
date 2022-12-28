import propTypes from 'prop-types';
import { CardActionArea, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API_URL } from 'api/apiUrl';
import * as S from './styles';

export function CarsCard({
  id, carModel, storeLocation, price, image, rating,
}) {
  const navigate = useNavigate();
  return (
    <S.CardContainer>
      <CardActionArea onClick={() => navigate(`/store/car/${id}`)}>
        <S.CardImage image={`${API_URL}${image}`} alt={carModel.name} />
        <CardContent>
          <S.CardHeader>
            <S.CardTitle>{carModel.name}</S.CardTitle>
            <S.CardLocation>{storeLocation.name}</S.CardLocation>
          </S.CardHeader>
          <S.CardBody>
            <S.CardRating>{rating}</S.CardRating>
            <S.CardPrice>
              $
              {price}
            </S.CardPrice>
          </S.CardBody>
        </CardContent>
      </CardActionArea>
    </S.CardContainer>
  );
}

CarsCard.propTypes = {
  image: propTypes.string,
  id: propTypes.number,
  price: propTypes.string,
  rating: propTypes.number,
  carModel: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
  storeLocation: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
}.isRequired;
