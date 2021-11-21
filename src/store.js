import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, composedEnhancer);

export default store;
