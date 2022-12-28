import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { CarsCard } from 'components/Cards';
import { listAllCars } from 'api';
import * as S from './styles';

export function Cars() {
  const [cars, setCars] = useState([]);
  const [status, setStatus] = useState({ status: false });
  const navigate = useNavigate();

  useEffect(() => {
    listAllCars()
      .then((response) => setCars(response))
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, []);

  return (
    <>
      <Header />
      <h1>Cars</h1>
      <StatusMessages {...status} />
      <S.CreateNewCarBtn onClick={() => navigate('/admin/car/new')}>Create new car</S.CreateNewCarBtn>
      <S.CarsContainer>
        {cars.map((car) => (
          <CarsCard key={car.id} {...car} />
        ))}
      </S.CarsContainer>
      <Footer />
    </>
  );
}
