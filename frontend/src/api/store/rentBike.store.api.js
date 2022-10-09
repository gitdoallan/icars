import axios from 'axios';
import { API_URL } from '../apiUrl';

export const rentBike = async ({ id, startDate, endDate }) => {
  const orderTotal = 1000;
  const { data } = await axios.post(
    `${API_URL}/store/bike/rent`,
    {
      id, orderTotal, startDate, endDate,
    },
    { withCredentials: true },
  );
  return data;
};
