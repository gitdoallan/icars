import axios from 'axios';
import { API_URL } from '../apiUrl';

export const createUser = async ({ name, email, password }) => {
  const { data } = await axios.post(`${API_URL}/users/create`, { name, email, password }, {
    withCredentials: true,
  });
  return data;
};
