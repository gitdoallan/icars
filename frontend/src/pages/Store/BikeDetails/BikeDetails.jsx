import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { BikeDetailsCard } from 'components/Cards';
import { BikeAdminActions, RentNowAction } from 'components/Actions';
import { DatePickerFilter } from 'components/Filters';
import { StatusMessages } from 'components/StatusMessages';
import { getBikeById, API_URL } from 'api';
import * as S from './styles';

export function BikeDetails() {
  const [bike, setBike] = useState();
  const [status, setStatus] = useState({ status: false });
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state);
  const isAdmin = userInfo.role === 'admin';

  useEffect(() => {
    getBikeById(id)
      .then(setBike)
      .catch(({ message }) => setStatus({ status: true, message, type: 'error' }));
  }, [id]);

  return (
    <>
      <Header />
      {bike && (
      <>
        <S.Title>{bike.bikeModel.name}</S.Title>
        <StatusMessages {...status} />
        <S.BikeDetailsContainer>
          <S.BikeImage
            alt={bike.bikeModel.name}
            image={`${API_URL}${bike.image}`}
          />
          <S.CardDetails>
            <BikeDetailsCard {...bike} />
            <DatePickerFilter />
            <RentNowAction id={bike.id} />
            {isAdmin && <BikeAdminActions id={bike.id} />}
          </S.CardDetails>
        </S.BikeDetailsContainer>
      </>
      )}
      <Footer />
    </>
  );
}
