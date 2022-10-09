import axios from 'axios';
import { API_URL } from '../apiUrl';

export const isBikeAvailable = async ({ id, startDate, endDate }) => {
  const { data } = await axios.post(
    `${API_URL}/store/bike/${id}/available`,
    { startDate, endDate },
    { withCredentials: true },
  );
  return data;
};
