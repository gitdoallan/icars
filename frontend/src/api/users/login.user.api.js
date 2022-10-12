import axios from 'axios';
import { API_URL } from '../apiUrl';

export const loginUser = async ({ email, password }) => {
  const { data } = await axios.post(`${API_URL}/users/login`, { email, password }, {
    headers: {
      'Access-Control-Allow-Origin': 'ibikes.win',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    withCredentials: true,
  });
  return data;
};
