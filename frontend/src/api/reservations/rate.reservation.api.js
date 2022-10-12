import axios from 'axios';
import { API_URL } from '../apiUrl';

export const rateReservation = async ({ orderId, bikeId, rate }) => {
  const { data } = await axios.post(
    `${API_URL}/reservations/rate/${orderId}`,
    { bikeId, rate },
    { withCredentials: true },
  );
  return data;
};
