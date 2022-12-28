import axios from 'axios';
import { API_URL } from '../apiUrl';

export const rateReservation = async ({ orderId, carId, rate }) => {
  const { data } = await axios.put(
    `${API_URL}/reservations/rate/${orderId}`,
    { carId, rate },
    { withCredentials: true },
  );
  return data;
};
