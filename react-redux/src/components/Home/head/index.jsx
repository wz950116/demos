import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class Head extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

        this.state = {
            cityInfo: null
        }
    }

    componentWillMount() {
        
    }

    showSelectCityPage() {
        this.props.showSelectCityPage();
    }
  
    render() {
        return (
            <header id="home-head">
                <div className="lt">
                    <div className="locationBox" onClick={this.showSelectCityPage.bind(this)}>
                        CLICK
                    </div>
                </div>
            </header>
        )
    }

}

export default Head;