import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addressInfoInit } from 'util/siteInit';
import * as commonInfoActionsFromOtherFile from '../actions/commonInfo.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)  // 防止不必要的渲染
        this.state = {
            showTab: false,
            initDone: false
        }
    }

    componentWillMount() {
        this.initStorage();
    }

    componentWillReceiveProps(newProps) {
        
    }

    componentWillUpdate() {
        // 不能在这里修改 state 不然会死循环内存爆炸
    }

    componentDidMount() {
        
    }

    initStorage () {
        let addressInfo = addressInfoInit();

        addressInfo.then(res => {
            // 将城市信息存储到 Redux中，方便全局调用
            this.props.commonInfoActions.updateAddressInfo(res);

            this.setState({
                initDone: true
            });
        }).catch(error => {
            console.log(error);
        }); 
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone ?
                    this.props.children :
                    null
                }
            </div>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        reduxState: state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        commonInfoActions: bindActionCreators(commonInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
