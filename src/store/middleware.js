import reducersLazyLoad from './reducersLazyLoad';
const middleware = [];
reducersLazyLoad((module) => {
    if (module.middleware) {
        middleware.push(module.middleware);
    }
});
export default middleware;
