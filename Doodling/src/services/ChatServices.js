import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const sendMessage = async (message) => {
  return await axios.post(`${BASE_URL}/send`, { message });
};
