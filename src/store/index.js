import {
  createStore,
  applyMiddleware,
} from 'redux';
import rootSaga from '../sagas';

///////////////////////// Init Store /////////////////////
import { reducer } from '../reducers';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)