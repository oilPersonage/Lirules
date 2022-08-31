import { GetClaimResponse } from '@api/claim';
import { HttpErrorResponse } from '@api/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/reducers';

import { ClaimState } from './types';

const initialState: Partial<ClaimState> = {};

export const claimSlice = createSlice({
  name: 'claim',
  initialState,
  reducers: {
    /** CLAIM **/
    getClaimDataRequest: (state) => {
      return {
        ...state,
        errorLoadingClaimData: undefined,
        claimDataLoading: true,
        claimDataLoaded: undefined,
      };
    },
    getClaimDataSuccess: (state, action: PayloadAction<GetClaimResponse>) => {
      return {
        ...state,
        claim: action?.payload,
        errorLoadingClaimData: undefined,
        claimDataLoading: undefined,
        claimDataLoaded: true,
      };
    },
    getClaimDataFailure: (state, action: PayloadAction<HttpErrorResponse>) => {
      return {
        ...state,
        claim: undefined,
        errorLoadingClaimData: action?.payload,
        claimDataLoading: undefined,
        claimDataLoaded: true,
      };
    },
    getClaimDataCancel: (state) => {
      return {
        ...state,
        claim: undefined,
        errorLoadingClaimData: undefined,
        claimDataLoading: undefined,
        claimDataLoaded: undefined,
      };
    },
    clear: () => initialState,
  },
  extraReducers: {},
});

export const claimActions = {
  /** CLAIM ACTIONS **/
  ...claimSlice.actions,
};

export const claimSelectors = {
  /** CLAIM SELECTORS **/
  claim: (state: RootState) => state?.claim,
  errorLoadingClaimData: (state: RootState) => state?.claim,
  claimDataLoading: (state: RootState) => state?.claim?.claimDataLoading,
  claimDataLoaded: (state: RootState) => state?.claim?.claimDataLoaded,
};
