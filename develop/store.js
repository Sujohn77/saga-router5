import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import application from "./redux/reducers";
import { createInjectStore, injectReducer } from "redux-injector";
import createSagaMiddleWare from "redux-saga";
import sagaRoot from "./sagas/index";

const sagaMiddleware = createSagaMiddleWare();

const replaceAsyncReducers = (rootReducers, keys, reducer) => {
    let key = keys.shift();
    if (keys.length === 0) {
        rootReducers[key] = reducer;
        return;
    }
    if (rootReducers[key] === undefined) rootReducers[key] = {};
    let nextRootReducers = rootReducers[key];
    return replaceAsyncReducers(nextRootReducers, keys, reducer);
};

const combineAsyncReducers = (asyncReducers) => {
    if (typeof asyncReducers !== "object") return asyncReducers;
    let combineReducerObject = {};
    for (let prop in asyncReducers) {
        if (!asyncReducers.hasOwnProperty(prop)) continue;
        let value = asyncReducers[prop];
        if (typeof value === "object") {
            combineReducerObject[prop] = combineAsyncReducers(value);
        } else if (typeof value === "function") {
            combineReducerObject[prop] = value;
        }
    }
    return combineReducers(combineReducerObject);
};

export const makeRootReducer = (reducers) => {
    let newCombinedReducers = {};

    for (let key in reducers) {
        if (!reducers.hasOwnProperty(key)) continue;
        newCombinedReducers[key] = combineAsyncReducers(reducers[key]);
    }

    return combineReducers({
        ...newCombinedReducers,
    });
};

// Configure the store
const store = ((initialState = {}) => {
    let additional = compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
    );

    const store = createStore(
        makeRootReducer(application),
        initialState,
        additional
    );

    store.asyncReducers = application;

    store.injectReducer = (key, reducer) => {
        let keys = `application.${key}`.split(".");

        replaceAsyncReducers(store.asyncReducers, keys, reducer);

        store.replaceReducer(makeRootReducer(store.asyncReducers));
    };

    // Return the modified store
    return store;
})();

store.injectSaga = createSagaInjector(sagaMiddleware.run, sagaRoot);

// runSaga is middleware.run function
// rootSaga is a your root saga for static saagas
function createSagaInjector(runSaga, sagaRoot) {
    // Create a dictionary to keep track of injected sagas
    const injectedSagas = new Map();

    const isInjected = (key) => injectedSagas.has(key);

    const injectSaga = (key, saga) => {
        // We won't run saga if it is already injected
        if (isInjected(key)) return;

        // Sagas return task when they executed, which can be used
        // to cancel them
        const task = runSaga(saga);

        // Save the task if we want to cancel it in the future
        injectedSagas.set(key, task);
    };

    // Inject the root saga as it a staticlly loaded file,
    injectSaga("root", sagaRoot);

    return injectSaga;
}

export { store };
