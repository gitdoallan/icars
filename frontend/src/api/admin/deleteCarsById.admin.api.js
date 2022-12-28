import axios from 'axios';
import { API_URL } from '../apiUrl';

export const deleteCarsById = async (id) => {
  const { data } = await axios.delete(
    `${API_URL}/admin/car/${id}`,
    { withCredentials: true },
  );
  return data;
};
