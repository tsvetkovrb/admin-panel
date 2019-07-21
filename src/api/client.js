import axios from 'axios';

const VERSIONS = {
  V1: 'v1',
};

export const request = axios.create({
  validateStatus: status => status >= 200 && status < 400,
  baseURL: `https://staff-list-api.herokuapp.com/api/${VERSIONS.V1}/`,
});
