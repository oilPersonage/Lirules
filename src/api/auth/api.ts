import { loginRequest } from '@api/auth/types';

import { webApi } from '@utils/axios';

export const authApi = {
  login: (data: loginRequest) => webApi.post('api/user/login', data),
  registration: (data: loginRequest) => webApi.post('api/user/login', data),
  logout: (data: loginRequest) => webApi.post('api/user/login', data),
};
