import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducers from './reducers';

const enhancers = compose(
    applyMiddleware(promise(), thunk),
    //window.devToolsExtension ? window.devToolsExtension() : (f) =>  f
);

const store = createStore(reducers, enhancers);

export default store;

export const history = syncHistoryWithStore(browserHistory, store);