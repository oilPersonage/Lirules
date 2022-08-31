// import { claim } from '@mocks/claim';

import {ApiPromise} from "@utils/types";

const SCOPE_MOCK_API_ERROR = undefined;
const MOCK_API_DATA = false;

// import { GetClaimResponse } from './types';
import {mockResponseData} from "@api/utils/mockResponseData";
import {webApi} from "@utils/axios";

export const claimApi = {
  getClaim: (): ApiPromise<boolean> => MOCK_API_DATA
      ? mockResponseData(true, SCOPE_MOCK_API_ERROR)
      : webApi.get('/details/registration'),
};
