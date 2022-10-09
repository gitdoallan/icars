import { useEffect } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useParams } from 'react-router-dom';
import { getReservationById } from 'api';

export function ReservationDetails() {
  const { id } = useParams();
  useEffect(() => {
    getReservationById(id).then(console.log);
  }, [id]);

  return (
    <div>
      <Header />
      ReservationDetails
      <Footer />
    </div>
  );
}
