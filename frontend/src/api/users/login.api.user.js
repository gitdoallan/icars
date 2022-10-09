import axios from 'axios';
import { API_URL } from '../apiUrl';

export const loginUser = async ({ email, password }) => {
  const { data } = await axios.post(`${API_URL}/users/login`, { email, password }, {
    withCredentials: true,
  });
  return data;
};
