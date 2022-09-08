import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/reducers';

import { LandingState } from './types';

const initialState: LandingState = {
  activeDot: 0,
  isStartAnimation: false,
};

export const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    /** CLAIM **/
    setActiveDot: (state, action) => {
      return {
        ...state,
        activeDot: action.payload,
      };
    },
    startAnimation: (state) => {
      return {
        ...state,
        isStartAnimation: true,
      };
    },
    clear: () => initialState,
  },
  extraReducers: {},
});

export const landingActions = {
  /** CLAIM ACTIONS **/
  ...landingSlice.actions,
};

export const landingSelectors = {
  /** CLAIM SELECTORS **/
  activeDot: (state: RootState): number => state.landing.activeDot,
  isStartAnimation: (state: RootState): boolean => state.landing.isStartAnimation,
};
