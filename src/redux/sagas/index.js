import { put, call, takeLatest, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';

import { setLoading, setServiceError } from '../actions/actionCreator';
import { REPEAT_REQUEST } from '../constants';

import { workerServices } from './workers/workerServices'
import { workerServiceDetail } from './workers/workerServiceDetail'


export function* watchServiceSaga() {
  yield put(setLoading(true));

  const err = yield select(({ errors }) => errors.serviceError)
  if (err) yield put(setServiceError(""));

  const path = yield select(({ router }) => router.location.pathname)
  // eslint-disable-next-line
  const [_, route, id] = path.split("/")

  switch (route) {
    case 'services':
      id
        ? yield call(workerServiceDetail, id)
        : yield call(workerServices)
      break;
    default: break;
  }

  yield put(setLoading(false));
}



export default function* rootSaga() {
  yield takeLatest([LOCATION_CHANGE, REPEAT_REQUEST], watchServiceSaga);
}
