import axios from 'axios';
import { API_URL } from 'api';

export const createNewUser = async (user) => {
  const response = await axios.post(`${API_URL}/admin/user/new`, user, {
    withCredentials: true,
  });
  return response.data;
};
