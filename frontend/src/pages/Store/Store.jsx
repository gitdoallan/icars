import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { BikesCard } from 'components/Cards';
import { BikesCardSkeleton } from 'components/Skeletons';
import { getAllBikes } from 'api';
import * as S from './styles';

export function Store() {
  const [bikesList, setBikesList] = useState(null);
  const [status, setStatus] = useState({ status: false });
  const skeletonArray = Array.from(Array(6).keys());
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
        { bikesList
          ? bikesList.map((bike) => (<BikesCard key={bike.id} {...bike} />))
          : skeletonArray.map((e) => (<BikesCardSkeleton key={e} />)) }
      </S.StoreContainer>
      <Footer />
    </>
  );
}
