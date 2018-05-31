import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import RouteMap from './router';

// 创建 Redux 的 store 对象
const store = configureStore();

render(
  	<Provider store={store}>
  		{RouteMap}
  	</Provider>,
  	document.getElementById('root')
)