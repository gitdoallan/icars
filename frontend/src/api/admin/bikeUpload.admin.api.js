import axios from 'axios';
import { API_URL } from '../apiUrl';

export const bikeUpload = async (formData) => {
  const response = await axios.post(`${API_URL}/admin/bike/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });
  return response.data;
};
