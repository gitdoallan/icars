import propTypes from 'prop-types';
import * as S from './styles';

export function BikeDetailsCard({
  id, storeLocation, bikeModel, bikeColor, price, rating,
}) {
  return (
    <S.CardDetails>
      <S.CardDetailsText>
        Location:
        {' '}
        {storeLocation.name}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Color:
        {' '}
        {bikeColor.name}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Model:
        {' '}
        {bikeModel.name}
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
  id: propTypes.number,
  price: propTypes.number,
  rating: propTypes.number,
  storeLocation: propTypes.shape({
    name: propTypes.string,
  }),
  bikeModel: propTypes.shape({
    name: propTypes.string,
  }),
  bikeColor: propTypes.shape({
    name: propTypes.string,
  }),
}.isRequired;
