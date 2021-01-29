import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { IGlobalState } from './types';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

// This goes in util of some king but...
const isProduction = () => {
	return process.env.NODE_ENV === 'production';
};

const res = isProduction()
	? applyMiddleware(...middleware)
	: composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(reducers, undefined, res);

export const getStoreState = (): Readonly<IGlobalState> => {
	return store.getState();
};

export default store;
