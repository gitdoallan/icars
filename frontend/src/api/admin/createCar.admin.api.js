import axios from 'axios';
import { API_URL } from 'api';

export const createCar = async (car) => {
  const response = await axios.post(`${API_URL}/admin/car/create`, car, {
    withCredentials: true,
  });
  return response.data;
};
