import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/reducers';

import { LandingState } from './types';

const initialState: LandingState = {
  isStartAnimation: false,
  activeNav: 0,
  isHover: false,
  landingMouseRef: undefined,
};

export const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    /** CLAIM **/
    setActiveNav: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        activeNav: action.payload,
      };
    },
    startAnimation: (state) => {
      return {
        ...state,
        isStartAnimation: true,
      };
    },
    setIsHover: (state) => {
      return {
        ...state,
        isHover: !state.isHover,
      };
    },
    setLandingMouseRefRef: (state, action: PayloadAction<HTMLElement>) => {
      return {
        ...state,
        landingMouseRef: action.payload,
      };
    },
    setSpeedFunction: (state, action: PayloadAction<(number, boolean) => void>) => {
      return {
        ...state,
        setSpeed: action.payload,
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
  landing: (state: RootState): LandingState => state.landing,
};
