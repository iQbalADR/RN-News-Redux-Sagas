import {call, put} from 'redux-saga/effects';
import {getHeaderData, getDetailData} from '../api/data';

export function* fetchDataHeader() {
    const response = yield call(getHeaderData);
    yield put({ type: 'GET_NEWS_HEADER_SUCCESS', response });
}

export function* fetchDataDetail(params) {
    const response = yield call(getDetailData,params.id);
    yield put({ type: 'GET_NEWS_DETAIL_SUCCESS', response });
}