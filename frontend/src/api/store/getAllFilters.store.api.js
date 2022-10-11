import axios from 'axios';
import { API_URL } from '../apiUrl';

export const getAllFilters = async () => {
  const { data } = await axios.get(`${API_URL}/store/filters`, { withCredentials: true });
  return data;
};
