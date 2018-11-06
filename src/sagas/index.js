import { takeLatest, all } from 'redux-saga/effects';
import { fetchDataHeader, fetchDataDetail } from './fetchDataSagas';

export function* rootSagas() {
    yield all([
        takeLatest('GET_NEWS_HEADER_LIST', fetchDataHeader),
        takeLatest('GET_NEWS_DETAIL_LIST', fetchDataDetail),
    ])
}