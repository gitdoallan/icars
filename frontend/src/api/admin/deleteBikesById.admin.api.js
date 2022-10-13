import axios from 'axios';
import { API_URL } from '../apiUrl';

export const deleteBikesById = async (id) => {
  const { data } = await axios.delete(
    `${API_URL}/admin/bike/${id}`,
    { withCredentials: true },
  );
  return data;
};
