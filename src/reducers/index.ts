import { claimSlice } from '@reducers/claim';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  claim: claimSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
