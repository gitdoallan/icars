import axios from 'axios';
import { API_URL } from '../apiUrl';

export const isCarAvailable = async ({ id, startDate, endDate }) => {
  const { data } = await axios.post(
    `${API_URL}/store/car/available`,
    { id, startDate, endDate },
    { withCredentials: true },
  );
  return data;
};
