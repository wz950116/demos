import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as commonInfoActionsFromOtherFile from '../../actions/commonInfo.js';

import Head from './head';
import City from '../Common/City';

import './style.less';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            shouldLoad: false,
            showGototop: false,
            showSelectCity: false,
            categoryData: [],
            shoplistData: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0,
            timeoutId: null
        }
    }

    showSelectCityPage () {
        this.setState({
            showSelectCity: !this.state.showSelectCity
        })
    }

    render() {
        return (
            <div id="home-box" className={this.state.showSelectCity ? 'modalMskShow' : ''}>
                <City showSelectCity={this.state.showSelectCity} showSelectCityPage={this.showSelectCityPage.bind(this)} />
                <Head showSelectCityPage={this.showSelectCityPage.bind(this)} />
            </div>
        ) 
    }
}