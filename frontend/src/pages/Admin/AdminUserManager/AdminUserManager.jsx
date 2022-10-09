import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { getAllReservationsByUserId } from 'api';

export function AdminUserManager() {
  const [reservations, setReservations] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getAllReservationsByUserId(id)
      .then(setReservations)
      .catch(console.error);
  }, []);

  console.log(reservations);
  return (
    <div>
      <Header />
      <h1>AdminUserManager</h1>
      <Footer />
    </div>
  );
}
