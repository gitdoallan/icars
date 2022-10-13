import axios from 'axios';
import { API_URL } from 'api';

export const updateBikesById = async ({
  id, image, price,
}) => {
  const response = await axios.put(
    `${API_URL}/admin/bike/${id}`,
    { image, price },
    {
      withCredentials: true,
    },
  );
  return response.data;
};
