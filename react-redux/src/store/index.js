import { createStore, combineReducers } from 'redux';
import userInfo from './userInfo';
import commonInfo from './commonInfo';

const reducers = combineReducers({
	userInfo,
	commonInfo,
});

export default function configureStore(initialState) {
	const store = createStore(reducers, initialState);
	return store;
};