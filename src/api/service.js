import axios from 'axios';
import { BACKEND_ADDRESS } from '../constants/common';

export const getService = async () => {
  const response = await axios.get(BACKEND_ADDRESS + 'type');
  return response.data;
};
