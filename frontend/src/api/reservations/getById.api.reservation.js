import axios from 'axios';
import { API_URL } from '../apiUrl';

export const getReservationById = async (id) => {
  const { data } = await axios.get(`${API_URL}/reservations/${id}`, {
    withCredentials: true,
  });
  return data;
};
