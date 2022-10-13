import axios from 'axios';
import { API_URL } from '../apiUrl';

export const rateReservation = async ({ orderId, bikeId, rate }) => {
  const { data } = await axios.put(
    `${API_URL}/reservations/rate/${orderId}`,
    { bikeId, rate },
    { withCredentials: true },
  );
  return data;
};
