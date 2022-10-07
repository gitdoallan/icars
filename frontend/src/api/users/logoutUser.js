import axios from 'axios';
import { API_URL } from '../apiUrl';

export const logoutUser = async () => {
  const { data } = await axios.get(`${API_URL}/users/logout`, {
    withCredentials: true,
  });
  return data;
};
