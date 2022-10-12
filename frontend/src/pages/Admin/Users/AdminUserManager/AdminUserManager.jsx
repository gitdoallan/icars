import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { getAllReservationsByUserId, deleteUsersById } from 'api';

export function AdminUserManager() {
  const [reservations, setReservations] = useState([]);
  const { id } = useParams();

  const handleDeleteUser = async () => {
    try {
      const result = await deleteUsersById(id);
      console.log(result);
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getAllReservationsByUserId(id)
      .then(setReservations)
      .catch(console.error);
  }, []);

  console.log(reservations);
  return (
    <div>
      <Header />
      <h1>Manage User</h1>
      <button type="button" onClick={handleDeleteUser}>Delete user</button>
      <Footer />
    </div>
  );
}
