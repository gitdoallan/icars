import axios from 'axios';
import { API_URL } from '../apiUrl';

export const getAllFilteredBikes = async (filter) => {
  const { data } = await axios.post(
    `${API_URL}/store/bikes/filter`,
    { ...filter },
    { withCredentials: true },
  );
  return data;
};
