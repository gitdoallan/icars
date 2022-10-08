import propTypes from 'prop-types';
import { CardActionArea, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API_URL } from 'api/apiUrl';
import * as S from './styles';

export function BikesCard({
  id, model, location, price, image, rating,
}) {
  const navigate = useNavigate();
  return (
    <S.CardContainer>
      <CardActionArea onClick={() => navigate(`/store/bike/${id}`)}>
        <S.CardImage image={`${API_URL}${image}`} alt={model} />
        <CardContent>
          <S.CardHeader>
            <S.CardTitle>{model}</S.CardTitle>
            <S.Location>{location}</S.Location>
          </S.CardHeader>
          <S.CardBody>
            <S.Rating>{rating}</S.Rating>
            <S.Price>
              $
              {price}
            </S.Price>
          </S.CardBody>
        </CardContent>
      </CardActionArea>
    </S.CardContainer>
  );
}

BikesCard.propTypes = {
  image: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  model: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};
