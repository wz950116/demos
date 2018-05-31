import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';

if (typeof require.ensure !== 'function') {
    require.ensure = (dependencies, callback) => {
        callback(require);
    };
};

const history = __DEV__ === 'dev' ? browserHistory : hashHistory;

const RouterMap = (
    <Router history={history}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/> 
            <Route path='/Home' component={Home}/>
        </Route>
    </Router>
);

export default RouterMap;