import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useParams } from 'react-router-dom';
import { StatusMessages } from 'components/StatusMessages';
import { getReservationById } from 'api';

export function ReservationDetails() {
  const { id } = useParams();
  const [reservationDetails, setReservationDetails] = useState();
  const [statusMessages, setStatusMessages] = useState({ status: false });

  useEffect(() => {
    getReservationById(id)
      .then(setReservationDetails)
      .catch((error) => setStatusMessages({ status: true, message: error.message, type: 'error' }));
  }, [id]);

  console.log(reservationDetails);

  return (
    <div>
      <Header />
      <h1>ReservationDetails</h1>
      <StatusMessages {...statusMessages} />
      <div>
        {reservationDetails?.bike.bikeModel.name}
        <br />
        Object details OK - Check console.log!
      </div>
      <Footer />
    </div>
  );
}
