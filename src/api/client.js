import axios from 'axios';

export const request = axios.create({
  validateStatus: status => status >= 200 && status <= 400,
  baseURL: 'http://localhost:5000/api/',
});
