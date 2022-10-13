import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { getAllReservationsByUserId, deleteUsersById } from 'api';

export function AdminUserManager() {
  const [reservations, setReservations] = useState([]);
  const [status, setStatus] = useState({ status: false });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    try {
      const result = await deleteUsersById(id);
      setStatus({ status: true, message: result.message, type: 'success' });
    } catch ({ response }) {
      setStatus({ status: true, message: response.data.message, type: 'error' });
    }
  };

  useEffect(() => {
    getAllReservationsByUserId(id)
      .then(setReservations)
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, []);

  return (
    <div>
      <Header />
      <h1>Manage User</h1>
      <StatusMessages {...status} />
      <button type="button" onClick={handleDeleteUser}>Delete user</button>
      {' - '}
      <button type="button" onClick={() => navigate(`/admin/user/${id}/update`)}>Edit user</button>
      <h2>Reservations</h2>
      {!reservations.length && <p>No reservations</p>}
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
