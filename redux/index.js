import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { addTodo, toggleTodo } from './actions';

// combineReducers({a, b, c...}) 返回每个state合并
let store = createStore(reducers, applyMiddleware(thunk));

// 打印初始状态
console.log(store.getState());

// 每次 state 更新时，打印日志 （注意 subscribe 返回一个函数用来注销监听器）
let unsubscribe = store.subscribe(() =>
	console.log(store.getState())
);

// 发起一系列 action ... （数据或来源于请求）
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));

// 停止监听 state 更新
unsubscribe();

ReactDOM.render(
	<Provider store={store}></Provider>,
  	document.getElementById('js-explore-view-container')
)