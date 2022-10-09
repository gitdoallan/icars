import axios from 'axios';
import { API_URL } from '../apiUrl';

export const listAllUserReservations = async () => {
  const { data } = await axios.get(`${API_URL}/reservations`, {
    withCredentials: true,
  });
  return data;
};
