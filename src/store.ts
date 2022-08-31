import { rootSaga } from '@reducers/rootSaga';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@src/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });
export type Store = typeof store;

sagaMiddleware.run(rootSaga);