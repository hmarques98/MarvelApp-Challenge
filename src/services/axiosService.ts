import { BASE_URL, API_KEY, HASH_KEY, TS_KEY } from '@env';
import { log } from '@utils/console';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  timeoutErrorMessage: 'Timeout error',
});

instance.defaults.params = {
  apikey: API_KEY,
  ts: TS_KEY,
  hash: HASH_KEY,
  orderBy: 'title',
};

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error, 'request interceptor');
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  },
);
export default instance;
