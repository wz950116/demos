import React from 'react';

import MenuLi from './menuLi';
import './menu.scss';

let menuLis = ["Home","Story","Travel"];

class MenuUl extends React.Component{
	render(){
		return(
			<ul>
			{
				menuLis.map((menuLi, index) => {
				    return <MenuLi name={menuLi} key={index}/>
				})
			}
			</ul>
		);	
	}
}

class Nav extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4],
            listDom: ""
        }
    }
    componentDidMount () {
        const listDom = this.state.list.map((item, index) => (
            <li class="list" key={index}>
                {item}
            </li>
        ));
        console.log(listDom);
        this.setState({listDom});
    }
    render(){
        return(
            <nav>
                <div id="menu">
                    <MenuUl/>
                    <ul>
                        {this.state.listDom}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;