import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useParams } from 'react-router-dom';
import { StatusMessages } from 'components/StatusMessages';
import { RateOrderAction, CancelReservationAction } from 'components/Actions';
import { getReservationById } from 'api';
import * as S from './styles';

export function ReservationDetails() {
  const { id } = useParams();
  const [reservationDetails, setReservationDetails] = useState();
  const [status, setStatus] = useState({ status: false });

  useEffect(() => {
    getReservationById(id)
      .then(setReservationDetails)
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, [id]);

  return (
    <>
      <Header />
      <S.Title>Reservation Details</S.Title>
      <StatusMessages {...status} />
      <S.DetailsContainer>
        <S.Text>
          Id:
          {' '}
          {reservationDetails?.id}
        </S.Text>
        <S.Text>
          Model:
          {' '}
          {reservationDetails?.bike.bikeModel.name}
        </S.Text>
        <S.Text>
          Location:
          {' '}
          {reservationDetails?.bike.storeLocation.name}
        </S.Text>
        <S.Text>
          Start Date:
          {' '}
          {reservationDetails?.startDate.slice(0, 10)}
        </S.Text>
        <S.Text>
          End Date:
          {' '}
          {reservationDetails?.endDate.slice(0, 10)}
        </S.Text>
        <S.Text>
          Total Price:
          {' '}
          {reservationDetails?.orderTotal}
        </S.Text>
        <S.Text>
          Status:
          {' '}
          {reservationDetails?.orderStatus}
        </S.Text>

        <S.Text>Check-in starts at 8AM</S.Text>
        <S.Text>Check-out ends at 6PM</S.Text>

        {reservationDetails?.rate
          ? (<S.Text>Rating: Thank you for rating!</S.Text>)
          : (
            <RateOrderAction
              orderId={reservationDetails?.id}
              bikeId={reservationDetails?.bike.id}
            />
          )}
        <CancelReservationAction
          orderId={reservationDetails?.id}
          setStatus={setStatus}
        />
      </S.DetailsContainer>
      <Footer />
    </>
  );
}
