import axios from 'axios';

const VERSIONS = {
  V1: 'v1',
};

export const request = axios.create({
  validateStatus: status => status >= 200 && status < 400,
  baseURL: `https://quiet-bayou-37772.herokuapp.com/api/${VERSIONS.V1}/`,
});
