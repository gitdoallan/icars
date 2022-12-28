import propTypes from 'prop-types';
import * as S from './styles';

export function CarDetailsCard({
  storeLocation, carModel, carColor, price, rating,
}) {
  return (
    <>
      <S.CardDetailsText>
        Location:
        {' '}
        {storeLocation.name}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Color:
        {' '}
        {carColor.name}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Model:
        {' '}
        {carModel.name}
      </S.CardDetailsText>
      <S.CardDetailsText>
        Price:
        {' '}
        $
        {price}
        {' '}
        /day
      </S.CardDetailsText>
      <S.CardDetailsRating>{rating}</S.CardDetailsRating>
    </>
  );
}

CarDetailsCard.propTypes = {
  id: propTypes.number,
  price: propTypes.number,
  rating: propTypes.number,
  storeLocation: propTypes.shape({
    name: propTypes.string,
  }),
  carModel: propTypes.shape({
    name: propTypes.string,
  }),
  carColor: propTypes.shape({
    name: propTypes.string,
  }),
}.isRequired;
