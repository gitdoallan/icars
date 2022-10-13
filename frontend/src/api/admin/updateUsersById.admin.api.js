import axios from 'axios';
import { API_URL } from 'api';

export const updateUsersById = async ({
  id, name, email, role,
}) => {
  const response = await axios.put(`${API_URL}/admin/user/${id}`, {
    id, name, email, role,
  }, {
    withCredentials: true,
  });
  return response.data;
};
