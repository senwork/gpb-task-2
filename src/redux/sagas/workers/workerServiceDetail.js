import { put, call } from 'redux-saga/effects';
import {
    setServiceDetail,
    setServiceError,
} from '../../actions/actionCreator';
import { getServiceDetail } from '../../../api/index';


export function* workerServiceDetail(id) {
    try {
        const newDetailInfo = yield call(getServiceDetail, id);
        yield put(setServiceDetail(newDetailInfo));
    } catch (error) {
        yield put(setServiceError(error.message));
    }
}
