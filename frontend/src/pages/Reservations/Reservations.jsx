import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { ReservationsCard } from 'components/Cards';
import { StatusMessages } from 'components/StatusMessages';
import { listAllUserReservations } from 'api/reservations';
import * as S from './styles';

export function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [status, setStatus] = useState({ status: false });

  useEffect(() => {
    listAllUserReservations()
      .then((response) => setReservations(response))
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, []);

  return (
    <>
      <Header />
      <S.Title>Reservations</S.Title>
      <StatusMessages {...status} />
      {reservations.length === 0 && <S.Text>No reservations found</S.Text>}
      {reservations.map((reservation) => (
        <ReservationsCard key={reservation.id} {...reservation} />
      ))}
      <Footer />
    </>
  );
}
