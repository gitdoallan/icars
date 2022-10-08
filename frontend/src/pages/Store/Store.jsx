import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { getAllBikes } from 'api';
import * as S from './styles';

export function Store() {
  const [bikesList, setBikesList] = useState([]);
  const [status, setStatus] = useState({ status: false });
  useEffect(() => {
    getAllBikes()
      .then((response) => (setBikesList(response.data)))
      .catch((error) => setStatus({ status: true, message: error.message, type: 'error' }));
  }, []);

  return (
    <>
      <Header />
      <S.Title>Bike Listings</S.Title>
      <StatusMessages {...status} />
      <Footer />
    </>
  );
}
