import { useState, useEffect } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { listAllReservations } from 'api';

export function Admin() {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    listAllReservations()
      .then(setReservations)
      .catch(console.error);
  }, []);

  console.log(reservations);

  return (
    <div>
      <Header />
      <h1>Admin</h1>
      <Footer />
    </div>
  );
}
