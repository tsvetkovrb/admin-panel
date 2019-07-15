import axios from 'axios';

const VERSIONS = {
  V1: 'v1',
};

export const request = axios.create({
  validateStatus: status => status >= 200 && status < 400,
  baseURL: `http://localhost:5000/api/${VERSIONS.V1}/`,
});
