import { all, put, call, takeLatest } from 'redux-saga/effects';
import api from './api.methods';
import * as types from './types';
import * as actions from './actions';

function* loadPlayersSaga() {
    yield put(actions.loadingPlayers(true));
    const response = yield call(api.getPlayers);
    if (response?.records?.length > 0) {
        yield put(actions.loadedPlayers(response?.records));
    }
    yield put(actions.loadingPlayers(false));
}

function* loadIpSaga() {
    const response = yield call(api.getIp);
    if (response) {
        yield put(actions.loadedIp(response));
    }
}

function* createPlayerSaga({ payload }) {
    const response = yield call(api.createPlayer, payload);
    if (response?.createdTime) {
        yield put(actions.loadPlayers());
    }
}

export default function* saga() {
    yield all([
        takeLatest(types.LOAD_PLAYERS, loadPlayersSaga),
        takeLatest(types.LOAD_IP, loadIpSaga),
        takeLatest(types.CREATE_PLAYER, createPlayerSaga)
    ]);
}
