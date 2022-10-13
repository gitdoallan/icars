import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { BikesCard } from 'components/Cards';
import { listAllBikes } from 'api';
import * as S from './styles';

export function Bikes() {
  const [bikes, setBikes] = useState([]);
  const [status, setStatus] = useState({ status: false });
  const navigate = useNavigate();

  useEffect(() => {
    listAllBikes()
      .then((response) => setBikes(response))
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, []);

  return (
    <>
      <Header />
      <h1>Bikes</h1>
      <StatusMessages {...status} />
      <S.CreateNewBikeBtn onClick={() => navigate('/admin/bike/new')}>Create new bike</S.CreateNewBikeBtn>
      <S.BikesContainer>
        {bikes.map((bike) => (
          <BikesCard key={bike.id} {...bike} />
        ))}
      </S.BikesContainer>
      <Footer />
    </>
  );
}
