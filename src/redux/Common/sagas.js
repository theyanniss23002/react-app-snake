import { all, put, call, takeLatest } from 'redux-saga/effects';
import api from './api.methods';
import * as types from './types';
import * as actions from './actions';

function* loadCharactersSaga() {
    const response = yield call(api.getCharacters);
    if (response?.status === 200) {
        yield put(actions.loadedCharacters(response?.data));
    }
}

export default function* saga() {
    yield all([takeLatest(types.LOAD_CHARACTERS, loadCharactersSaga)]);
}
