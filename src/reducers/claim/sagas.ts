// import { claimApi } from '@api/claim';
// import { HttpErrorResponse } from '@api/types';
import { claimActions } from '@reducers/claim';
import { SagaIterator } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

function* getClaimDataSaga(): SagaIterator {
  try {
    // const { data } = yield call(claimApi.getClaim);
    // yield put(claimActions.getClaimDataSuccess(data));
  } catch (error) {
    // yield put(claimActions.getClaimDataFailure(error as HttpErrorResponse));
    // yield put(claimActions.getClaimDataFailure(error));
  }
}

// function* canBeCanceledGetClaimDataSaga(): SagaIterator {
//   const bgGetClaimDataSaga = yield fork(getClaimDataSaga);
//   yield take(claimActions.getClaimDataCancel.type);
//   yield cancel(bgGetClaimDataSaga);
// }

export function* watchClaimServices(): SagaIterator {
  yield takeLatest(claimActions.getClaimDataRequest.type, getClaimDataSaga);
}
