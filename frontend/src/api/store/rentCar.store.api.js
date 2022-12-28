import axios from 'axios';
import { API_URL } from '../apiUrl';

export const rentCar = async ({ id, startDate, endDate }) => {
  const { data } = await axios.post(
    `${API_URL}/store/car/rent`,
    {
      id,
      startDate,
      endDate,
    },
    { withCredentials: true },
  );
  return data;
};
