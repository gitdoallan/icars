import axios from 'axios';
import { API_URL } from '../apiUrl';

export const getAllCars = async () => {
  const { data } = await axios.get(`${API_URL}/store/cars`, {
    withCredentials: true,
  });
  return data;
};
