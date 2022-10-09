import axios from 'axios';
import { API_URL } from '../apiUrl';

export const getBikeById = async (id) => {
  const { data } = await axios.get(`${API_URL}/store/bike/${id}`, {
    withCredentials: true,
  });
  return data;
};
