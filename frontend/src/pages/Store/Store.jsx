import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { BikesCard } from 'components/Cards';
import { getAllBikes } from 'api';
import * as S from './styles';

export function Store() {
  const [bikesList, setBikesList] = useState([]);
  const [status, setStatus] = useState({ status: false });
  useEffect(() => {
    getAllBikes()
      .then((response) => (setBikesList(response)))
      .catch((error) => setStatus({ status: true, message: error.message, type: 'error' }));
  }, []);

  return (
    <>
      <Header />
      <S.Title>Bike Listings</S.Title>
      <StatusMessages {...status} />
      <S.StoreContainer>
        {bikesList.map((bike) => (
          <BikesCard
            key={bike.id}
            id={bike.id}
            model={bike.model}
            color={bike.color}
            location={bike.location}
            price={bike.price}
            image={bike.image}
            rating={bike.rating}
          />
        ))}
      </S.StoreContainer>
      <Footer />
    </>
  );
}
