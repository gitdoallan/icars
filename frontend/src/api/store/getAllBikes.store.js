import axios from 'axios';
import { API_URL } from '../apiUrl';

export const getAllBikes = async () => {
  const { data } = await axios.get(`${API_URL}/store/bikes`, {
    withCredentials: true,
  });
  return data;
};
