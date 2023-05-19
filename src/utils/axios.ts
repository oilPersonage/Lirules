import axios, { AxiosInstance } from 'axios';

interface ICreateVtbApiInstance {
  webApi: AxiosInstance;
}

export function createVtbApiInstance(): ICreateVtbApiInstance {
  // regex удаляет текстовое название таймзоны, идущее после даты в скобках
  const dateString = new Date().toString().replace(/ *\([^)]*\) */g, '');
  const AXIOS_BASE_SETTINGS = {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
      accept: '*/*',
      'content-type': 'application/json',
      RequestDate: dateString,
    },
  };

  const axiosBaseInstance = axios.create({
    withCredentials: true,
    ...AXIOS_BASE_SETTINGS,
    // ...settings,
  });

  return {
    webApi: axiosBaseInstance,
  };
}

const { webApi } = createVtbApiInstance();

export { webApi };
