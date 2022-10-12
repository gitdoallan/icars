import axios from 'axios';
import { API_URL } from 'api';

export const createBike = async (bike) => {
  const response = await axios.post(`${API_URL}/admin/bike/create`, bike, {
    withCredentials: true,
  });
  return response.data;
};
