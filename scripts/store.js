import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './modules';

const initialState = {};
const extraMiddlewares = [];

// extraMiddlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())

const middleware = [thunk];

const composedEnhancers = compose(applyMiddleware(...middleware), ...extraMiddlewares);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
