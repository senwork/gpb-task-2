import { put, call } from 'redux-saga/effects';
import {
    setServiceList,
    setServiceError
} from '../../actions/actionCreator';
import { getServiceList } from '../../../api/index';


export function* workerServices() {
    try {
        const newServiceList = yield call(getServiceList);
        yield put(setServiceList(newServiceList));
    } catch (error) {
        yield put(setServiceError(error.message));
    }
}