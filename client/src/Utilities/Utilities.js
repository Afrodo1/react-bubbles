import axios from 'axios';
import {port} from '../App';

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: `http://localhost:${port}`, //needs to be fixed with the information I am grabbing

    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};