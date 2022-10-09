import axios from 'axios';
import { API_URL } from '../apiUrl';

export const listAllReservations = async () => {
  const { data } = await axios.get(
    `${API_URL}/admin`,
    { withCredentials: true },
  );
  return data;
};
