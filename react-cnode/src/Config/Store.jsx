import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from '../Reducer/Index';
import thunk from 'redux-thunk';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
var store = createStore(
    combineReducers(reducer),
    // thunk作用使action创建函数可以返回一个function代替一个action对象
    applyMiddleware(thunk)
);

export default store;