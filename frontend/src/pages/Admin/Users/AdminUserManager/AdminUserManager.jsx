import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { getAllReservationsByUserId, deleteUsersById } from 'api';

export function AdminUserManager() {
  const [reservations, setReservations] = useState([]);
  const [status, setStatus] = useState({ status: false });
  const { id } = useParams();

  const handleDeleteUser = async () => {
    try {
      const result = await deleteUsersById(id);
      setStatus({ status: true, message: result.message, type: 'success' });
    } catch (err) {
      setStatus({ status: true, message: err.message, type: 'error' });
    }
  };

  useEffect(() => {
    getAllReservationsByUserId(id)
      .then(setReservations)
      .catch((err) => setStatus({ status: true, message: err.message, type: 'error' }));
  }, []);

  return (
    <div>
      <Header />
      <h1>Manage User</h1>
      <StatusMessages {...status} />
      <button type="button" onClick={handleDeleteUser}>Delete user</button>
      <h2>Reservations</h2>
      {reservations?.map((reservation) => (
        <div key={reservation.id}>
          <p>
            Order ID:
            {' '}
            {reservation.id}
          </p>
          <p>
            Start Date:
            {' '}
            {reservation.startDate.split('T')[0]}
          </p>
          <p>
            End Date:
            {' '}
            {reservation.endDate.split('T')[0]}
          </p>
          <p>
            Status:
            {' '}
            {reservation.orderStatus}
          </p>
          <p>
            Total:
            {' '}
            {reservation.orderTotal}
          </p>
          <hr />
        </div>
      ))}
      <Footer />
    </div>
  );
}
