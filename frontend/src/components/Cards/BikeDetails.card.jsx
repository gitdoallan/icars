import propTypes from 'prop-types';
import * as S from './styles';

export function BikeDetailsCard({
  color, id, location, model, price, rating,
}) {
  return (
    <S.CardDetails>
      <S.CardDetailsText>
        Location:
        {' '}
        {location}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Color:
        {' '}
        {color}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Model:
        {' '}
        {model}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Price:
        {' '}
        $
        {price}
        {' '}
        /day
      </S.CardDetailsText>
      <S.CardDetailsText>
        ID:
        {' '}
        {id}
      </S.CardDetailsText>
      <S.CardDetailsRating>{rating}</S.CardDetailsRating>
    </S.CardDetails>
  );
}

BikeDetailsCard.propTypes = {
  color: propTypes.string,
  id: propTypes.number,
  location: propTypes.string,
  model: propTypes.string,
  price: propTypes.number,
  rating: propTypes.number,
}.isRequired;
