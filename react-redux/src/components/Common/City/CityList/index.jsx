import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getAddressListData } from '../../../../fetch/home.js'
// import AddressItem from './AddressItem'
import './style.less'

class CityList extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

        this.state = {
            initDone: false,
            addressList: []
        }
    }

    componentWillReceiveProps(newProps) {
        if (!this.state.initDone && newProps.showSelectCity) {
            const result = getAddressListData();
            result.then((res) => {
                return res.json();
            }).then((data) => {
                if (data && data.length > 0) {
                    this.setState({
                        initDone: true,
                        addressList: data
                    })
                }
            }).catch((e) => {
                console.error('选择地址模块获取数据报错, ', e)
            })
        }
    }

    render() {
        let addressList = this.state.addressList;
        return (
            <section id='city-list-container'>
                <h4>收货地址</h4>
                <ul>
                    {
                        addressList.length > 0 &&
                        addressList.map((item, index) => {
                            return <li key={index}>{item.userName + item.gender}</li>
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default CityList