import axios from 'axios';
import { API_URL } from '../apiUrl';

export const rentBike = async ({ id, startDate, endDate }) => {
  const { data } = await axios.post(
    `${API_URL}/store/bike/rent`,
    {
      id,
      startDate: new Date(startDate).setHours(0, 0, 0, 0),
      endDate: new Date(endDate).setHours(0, 0, 0, 0),
    },
    { withCredentials: true },
  );
  return data;
};
