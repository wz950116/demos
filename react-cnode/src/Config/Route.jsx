import React, { Component } from 'react';
// 在react-router4 开始,所有的router组件均是从react-router-dom中导入
// Router被拆分成了StaticRouter、MemoryRouter、BrowserRouter、HashRouter、NativeRouter
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';

import IndexList from '../Component/IndexList'; //首页组件
import getComponent from '../Component/common/getComponent';

const routes = [
	{ path: '/',
		exact: true,
		component: IndexList
	},
	{ path: '/topic/create',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/TopicCreate'))
	},
	{ path: '/topic/:id',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/Topic'))
	},
	{ path: '/my/messages',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/MyMessages'))
	},
	{ path: '/user/:loginname',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/UserView'))
	},
	{ path: '/signin',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/Signin'))
	},
	{ path: '/signout',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/Signout'))
	}
];

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }

}
let Routers = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
const RouteConfig = (
    <Routers>
	    <Switch>
		    {routes.map((route, index) => (
			    <Route
				    key={index}
				    path={route.path}
				    exact={route.exact}
				    component={route.component}
			    />
		    ))}
		    <Redirect from='' to="/" />
	    </Switch>
    </Routers>
);

export default RouteConfig;