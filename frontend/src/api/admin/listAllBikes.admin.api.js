import axios from 'axios';
import { API_URL } from '../apiUrl';

export const listAllBikes = async () => {
  const { data } = await axios.get(
    `${API_URL}/admin/bikes`,
    { withCredentials: true },
  );
  return data;
};
