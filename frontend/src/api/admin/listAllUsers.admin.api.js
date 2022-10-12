import axios from 'axios';
import { API_URL } from '../apiUrl';

export const listAllUsers = async () => {
  const { data } = await axios.get(
    `${API_URL}/admin/users`,
    { withCredentials: true },
  );
  return data;
};
