import { useState, useEffect } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { AdminReservationsCard } from 'components/Cards';
import { listAllReservations } from 'api';

export function Admin() {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    listAllReservations()
      .then(setReservations)
      .catch(({ response }) => console.log(response.data));
  }, []);

  return (
    <div>
      <Header />
      <h1>Reservations</h1>
      {reservations.map((reservation) => (
        <AdminReservationsCard key={reservation.id} {...reservation} />
      ))}
      <Footer />
    </div>
  );
}
