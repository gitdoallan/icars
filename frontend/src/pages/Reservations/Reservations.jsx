import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { ReservationsCard } from 'components/Cards';
import { StatusMessages } from 'components/StatusMessages';
import { listAllUserReservations } from 'api/reservations';

export function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [status, setStatus] = useState({ status: false });

  useEffect(() => {
    listAllUserReservations()
      .then((response) => setReservations(response))
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, []);

  return (
    <div>
      <Header />
      <h1>Reservations</h1>
      <StatusMessages {...status} />
      {reservations.map((reservation) => (
        <ReservationsCard key={reservation.id} {...reservation} />
      ))}
      <Footer />
    </div>
  );
}
