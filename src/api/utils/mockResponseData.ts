import { MOCK_ERROR_MESSAGE } from '@src/constants';
import { isNotNil } from '@utils/typeguard';
import { ApiPromise, MockError } from '@utils/types';

const REQUEST_DELAY = 300;

export function mockResponseData<T>(data: T, error?: MockError): ApiPromise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        isNotNil(error)
          ? reject({
              response: {
                data: {
                  status: error?.status,
                  message: error?.message || MOCK_ERROR_MESSAGE,
                  code: error?.code,
                },
                status: error?.status,
                message: error?.message || MOCK_ERROR_MESSAGE,
              },
            })
          : resolve({ data }),
      REQUEST_DELAY
    );
  });
}
