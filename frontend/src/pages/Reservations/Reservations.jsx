import { useEffect } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { listAllUserReservations } from 'api/reservations';

export function Reservations() {
  useEffect(() => {
    listAllUserReservations().then(console.log);
  }, []);

  return (
    <div>
      <Header />
      Reservations
      <Footer />
    </div>
  );
}
