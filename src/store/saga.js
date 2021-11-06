import { all } from 'redux-saga/effects';
import lazyFeatureLoad from './reducersLazyLoad';

const sagasFromReduxFolder = [];
lazyFeatureLoad((module) => {
    if (module.saga) {
        sagasFromReduxFolder.push(module.saga());
    }
});

// eslint-disable-next-line func-names
const allSagas = function* () {
    yield all(sagasFromReduxFolder);
};

export default allSagas;
