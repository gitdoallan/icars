import axios from 'axios';
import { API_URL } from '../apiUrl';

export const getAllReservationsByUserId = async (userId) => {
  const { data } = await axios.get(
    `${API_URL}/admin/user/${userId}`,
    { withCredentials: true },
  );
  return data;
};
