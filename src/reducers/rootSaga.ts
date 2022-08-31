import { all } from 'redux-saga/effects';

import { watchClaimServices } from './claim/sagas';

export function* rootSaga() {
  yield all([
    watchClaimServices(),
  ]);
}
