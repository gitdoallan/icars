import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { AdminUserManagerCard } from 'components/Cards';
import { StatusMessages } from 'components/StatusMessages';
import { getAllReservationsByUserId, deleteUsersById } from 'api';
import * as S from 'components/Cards/styles';

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
    <>
      <Header />
      <S.Title>Manage User</S.Title>
      <StatusMessages {...status} />
      <S.DetailsPage type="button" onClick={handleDeleteUser}>Delete user</S.DetailsPage>
      {' '}
      <S.DetailsPage type="button" onClick={() => navigate(`/admin/user/${id}/update`)}>Edit user</S.DetailsPage>
      <S.CardTitle>Reservations</S.CardTitle>
      <S.Divider />
      {!reservations.length && <S.Text>No reservations</S.Text>}
      {reservations?.map((reservation) => (
        <AdminUserManagerCard
          key={reservation.id}
          id={reservation.id}
          startDate={reservation.startDate.split('T')[0]}
          endDate={reservation.endDate.split('T')[0]}
          orderTotal={reservation.orderTotal}
        />
      ))}
      <Footer />
    </>
  );
}
