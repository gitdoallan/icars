import { useState, useEffect } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { AdminReservationsCard } from 'components/Cards';
import { StatusMessages } from 'components/StatusMessages';
import { listAllReservations } from 'api';
import * as S from './Users/styles';

export function Admin() {
  const [reservations, setReservations] = useState([]);
  const [status, setStatus] = useState({ status: false });
  useEffect(() => {
    listAllReservations()
      .then(setReservations)
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, []);

  return (
    <div>
      <Header />
      <S.Title>Reservations</S.Title>
      <StatusMessages {...status} />
      {reservations.map((reservation) => (
        <AdminReservationsCard key={reservation.id} {...reservation} />
      ))}
      <Footer />
    </div>
  );
}
