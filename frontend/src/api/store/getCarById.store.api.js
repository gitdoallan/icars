import axios from 'axios';
import { API_URL } from '../apiUrl';

export const getCarById = async (id) => {
  const { data } = await axios.get(`${API_URL}/store/car/${id}`, {
    withCredentials: true,
  });
  return data;
};
