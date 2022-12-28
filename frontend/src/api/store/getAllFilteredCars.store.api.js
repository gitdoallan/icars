import axios from 'axios';
import { API_URL } from '../apiUrl';

export const getAllFilteredCars = async (filter) => {
  const { data } = await axios.post(
    `${API_URL}/store/cars/filter`,
    { ...filter },
    { withCredentials: true },
  );
  return data;
};
