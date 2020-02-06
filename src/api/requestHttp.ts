import axios from 'axios';
import get from 'lodash/get';

import * as util from '@/utils';


const instance = axios.create({
  baseURL: util.getBaseUrl(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const IGNORED_UNAUTHORIZED_ROUTES = ['/auth', 'is_logged_in'];
const UNAUTHORIZED_STATUS = 401;

const handleUnauthorized = (error: object) => {
  const status = get(error, 'response.status');
  const url = get(error, 'request.responseURL', '');

  if (status === UNAUTHORIZED_STATUS && !IGNORED_UNAUTHORIZED_ROUTES.find(r => url.includes(r))) {
    
    window.location.reload();
  }
};

instance.interceptors.response.use(
  (res: any) => res,
  (error: any) => {
    handleUnauthorized(error);
    return Promise.reject(get(error, 'response.data.error', {}));
  }
);

export default instance;
