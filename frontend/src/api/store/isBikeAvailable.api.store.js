import axios from 'axios';
import { API_URL } from '../apiUrl';

export const isBikeAvailable = async ({ id, formattedStartDate, formattedEndDate }) => {
  const { data } = await axios.post(
    `${API_URL}/store/bike/available`,
    { id, startDate: formattedStartDate, endDate: formattedEndDate },
    { withCredentials: true },
  );
  return data;
};
