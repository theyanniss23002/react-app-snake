const reduxContext = require.context('../redux', true, /index\.js$/);

export default function lazyFeatureLoad(forEachModule) {
    reduxContext.keys().forEach((key) => {
        forEachModule(reduxContext(key), key);
    });
}
