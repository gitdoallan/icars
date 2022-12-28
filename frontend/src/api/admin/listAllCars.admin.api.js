import axios from 'axios';
import { API_URL } from '../apiUrl';

export const listAllCars = async () => {
  const { data } = await axios.get(
    `${API_URL}/admin/cars`,
    { withCredentials: true },
  );
  return data;
};
