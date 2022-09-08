import { claimSlice } from '@reducers/claim';
import { landingSlice } from '@reducers/landing';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  claim: claimSlice.reducer,
  landing: landingSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
