import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reducersLazyLoad from './reducersLazyLoad';

const reducers = {};

reducersLazyLoad((module) => {
    if (module.moduleName && module.default) {
        reducers[module.moduleName] = module.default;
    }
});

const combinedReducers = (history) =>
    combineReducers({
        router: connectRouter(history),
        ...reducers
    });

export default combinedReducers;
