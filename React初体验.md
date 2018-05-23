## React初体验

- modules

  - react
  - react-dom
  - redux（createStore）
  - react-redux（Provider）
  - react-router-dom（BrowserRouter as Router, Route, Switch, Redirect, NavLink）
  - react-lazyload
  - prop-types
  - react-grid-layout（网格布局系统）
  - react-bootstrap
  - react-router

- grammar

  - 渲染节点

    ```
    ReactDOM.render(<Root />, document.getElementById('root'))
    ```

  - 注入state

    ```
    import {Provider} from "react-redux"
    import store from "../redux/store"
    import App from "./App"
    <Provider store={store}>
    	<App/>
    </Provider>
    ```

  - react-router

    ```
    import { render } from 'react-dom'
    import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
    render((<Router>
    		<Route path="/" component={App}>
    			<IndexRoute component={Index} />
    			<Route path="/mall" component={Mall}>
                	<Route path="type/:typeName" component={Type} />
                </Route>
    		</Route>
    	</Router>), 
    document.getElementById('index'))

    // 路由为: /mail/type/123
    this.props.params = 123

    // 使用IndexLink，可以让首页的链接不会一直处于激活状态
    <ul>
    	<li><IndexLink></IndexLink></li>
    	<li><Link></Link></li>
    	<li><Link></Link></li>
    </ul>

    // Link中activeClassName对应active类名
    const linkTo = '/', activeClass = linkTo === '/' ? '' : 'active';
    <Link to={linkTo}  activeClassName={activeClass}></Link>
    ```

  - react-router-dom的使用

    ```
    import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
    // Switch组件用来选择最近的一个路由，否则最后一个没有指定path的路由也会显示
    // default props include history & location & match
    <Switch>
      <Route path="/recommend" component={Recommend} />
      <Redirect from="/" to="/recommend" />
    </Switch>
     <NavLink to="/recommend" className="nav-link">
     	<span>推荐</span>
     </NavLink>
     <Route path={`${match.url + '/:id'}`} component={Album} />
    ```

  - 生命周期

    ```	
    getInitialState：初始化state
    componentWillMount：初始化render之前执行，调用setState，render知道state变化
    componentDidMount：Http请求
    componentDidUpdate：组件更新后
    componentWillUnmount：组件需要移除时，可以清楚定时器、网络请求等
    ```

  - 获取DOM节点：

    ```
    <div className="scroll-view" ref="scrollView"></div>
    ReactDOM.findDOMNode(this.refs.scrollView)
    ```

  - slot 插入子组件

    ```
    {this.props.children}
    ```

  - swiper轮播图

    ```
    import Swiper from "swiper"
    componentDidMount () {
      Http请求...
      this.setState({
      	  sliderList: res.data.slider
       }, () => {
          // init swiper
          this.sliderSwiper = new Swiper(".slider-container", {
              loop: true,
              autoplay: 3000,
              autoplayDisableOnInteraction: false,
              pagination: '.swiper-pagination'
          });
       });
    },
    render () {
      return (
      	<div className="slider-container">
          <div className="swiper-wrapper">
            {
              this.state.sliderList.map(slider => {
                return (
                  <div className="swiper-slide" key={slider.id}>
                    <a className="slider-nav" onClick={this.toLink(slider.linkUrl)}>
                    	<img src={slider.picUrl} width="100%" height="100%" alt="推荐"/>
                    </a>
                  </div>
                );
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      )
    }
    ```

  - 行内 三目运算

    ```
    <div style={this.state.loading === true ? {display:"none"} : {}}></div>
    ```

  - react-grid-layout使用

    ```
    import { Responsive, WidthProvider } from 'react-grid-layout';
    const ResponsiveReactGridLayout = WidthProvider(Responsive);
    rennder () {
      <ResponsiveReactGridLayout className="layout" layouts={layouts}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
          <div key="1">1</div>
          <div key="2">2</div>
          <div key="3">3</div>
       </ResponsiveReactGridLayout>
    }
    ```

  - Dangerously Set InnerHTML

    ```
    目的：净化数据，防止XSS攻击
    《Header headerR={'<i class="fa fa-search fa_3x bui_fac_white"></i>'></Head>
    <p dangerouslySetInnerHTML={{__html:this.props.headerR}}></p>
    ```

    ​