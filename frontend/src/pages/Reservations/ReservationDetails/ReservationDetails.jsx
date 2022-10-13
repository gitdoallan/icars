import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useParams } from 'react-router-dom';
import { StatusMessages } from 'components/StatusMessages';
import { RateOrderAction } from 'components/Actions';
import { getReservationById, cancelReservation } from 'api';

export function ReservationDetails() {
  const { id } = useParams();
  const [reservationDetails, setReservationDetails] = useState();
  const [statusMessages, setStatusMessages] = useState({ status: false });

  const handleCancelReservation = async () => {
    try {
      await cancelReservation(id);
      setStatusMessages({
        status: true,
        message: 'Reservation successfully cancelled.',
        type: 'success',
      });
    } catch ({ response }) {
      setStatusMessages({
        status: true,
        message: response.data.message,
        type: 'error',
      });
    }
  };

  useEffect(() => {
    getReservationById(id)
      .then(setReservationDetails)
      .catch(({ response }) => setStatusMessages({ status: true, message: response.data.message, type: 'error' }));
  }, [id]);

  return (
    <div>
      <Header />
      <h1>Reservation Details</h1>
      <StatusMessages {...statusMessages} />
      <div>
        <p>
          Id:
          {' '}
          {reservationDetails?.id}
        </p>
        <p>
          Model:
          {' '}
          {reservationDetails?.bike.bikeModel.name}
        </p>
        <p>
          Location:
          {' '}
          {reservationDetails?.bike.storeLocation.name}
        </p>
        <p>
          Start Date:
          {' '}
          {reservationDetails?.startDate.slice(0, 10)}
        </p>
        <p>
          End Date:
          {' '}
          {reservationDetails?.endDate.slice(0, 10)}
        </p>
        <p>
          Total Price:
          {' '}
          {reservationDetails?.orderTotal}
        </p>
        <p>
          Status:
          {' '}
          {reservationDetails?.orderStatus}
        </p>

        <div>
          Rate:
          {' '}
          {reservationDetails?.rate
            ? 'Thank you for rating!'
            : (
              <RateOrderAction
                orderId={reservationDetails?.id}
                bikeId={reservationDetails?.bike.id}
              />
            )}
        </div>

        <p>Check-in starts at 8AM</p>
        <p>Check-out ends at 6PM</p>

        <button type="button" onClick={handleCancelReservation}>
          Cancel Reservation
        </button>
      </div>
      <Footer />
    </div>
  );
}
