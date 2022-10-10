import axios from 'axios';
import { API_URL } from '../apiUrl';

export const deleteUsersById = async (userId) => {
  const { data } = await axios.delete(
    `${API_URL}/admin/user/${userId}`,
    { withCredentials: true },
  );
  return data;
};
