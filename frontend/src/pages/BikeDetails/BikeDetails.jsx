import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { getBikeById, API_URL } from 'api';
import * as S from './styles';

export function BikeDetails() {
  const [bike, setBike] = useState();
  const [status, setStatus] = useState({ status: false });
  const { id } = useParams();

  useEffect(() => {
    getBikeById(id)
      .then((response) => setBike(response))
      .catch(({ message }) => setStatus({ status: true, message, type: 'error' }));
  }, [id]);

  console.log(bike);

  return (
    <>
      <Header />
      {bike && (
      <>
        <S.Title>{bike.model}</S.Title>
        <StatusMessages {...status} />
        <S.StoreContainer>
          <S.BikeImage
            alt={bike.model}
            image={`${API_URL}${bike.image}`}
          />
        </S.StoreContainer>
      </>
      )}
      <Footer />
    </>
  );
}
