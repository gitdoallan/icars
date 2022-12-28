import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters } from 'redux/slices';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { CarDetailsCard } from 'components/Cards';
import { CarAdminActions, RentNowAction } from 'components/Actions';
import { DatePickerFilter } from 'components/Filters';
import { StatusMessages } from 'components/StatusMessages';
import { getCarById, API_URL } from 'api';
import * as S from './styles';

export function CarDetails() {
  const [car, setCar] = useState();
  const [status, setStatus] = useState({ status: false });
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state);
  const isAdmin = userInfo.role === 'admin';
  const dispatch = useDispatch();

  useEffect(() => {
    getCarById(id)
      .then(setCar)
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
    dispatch(resetFilters());
  }, [id]);

  return (
    <>
      <Header />
      {car && (
        <>
          <S.Title>{car.carModel.name}</S.Title>
          <StatusMessages {...status} />
          <S.CarDetailsContainer>
            <S.CarImage
              alt={car.carModel.name}
              image={`${API_URL}${car.image}`}
            />
            <S.CardDetails>
              <CarDetailsCard {...car} />
              <DatePickerFilter />
              <RentNowAction id={car.id} />
              {isAdmin && <CarAdminActions id={car.id} />}
            </S.CardDetails>
          </S.CarDetailsContainer>
        </>
      )}
      <Footer />
    </>
  );
}
