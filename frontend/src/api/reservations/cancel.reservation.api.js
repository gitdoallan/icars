import axios from 'axios';
import { API_URL } from '../apiUrl';

export const cancelReservation = async (id) => {
  const { data } = await axios.post(
    `${API_URL}/reservations/cancel`,
    { orderId: id },
    { withCredentials: true },
  );
  return data;
};
