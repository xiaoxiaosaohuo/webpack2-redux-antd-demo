
import React from 'react'
import { Row, Col, Icon, Menu, Dropdown,notification } from 'antd'

import { Link } from 'react-router'
import {bindActionCreators} from 'redux';

import { connect } from 'react-redux'

import { logout } from '../feature/login/actions'

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

 class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
        userName: ""
    }
  }
componentWillMount(){
    const user = JSON.parse(localStorage.getItem("token")) || '';
    this.setState({
        userName: user.name
    })

}
componentWillReceiveProps(nextProps){

}
  render () {
    const userName = this.state.userName
    return (
      <div className='ant-layout-header'>

        <Menu className="header-menu"
        mode="horizontal">
            <Item key="MISHULALA" className="mishulala">
                <div style={{display:'flex',flexDirection:'column',alignContent:'center',margin: '12px 0'}}>
                <span>后台管理系统</span>
                <span>HOUTAIGUANLIXITONG</span>
              </div>
            </Item>
          <SubMenu title={<span><Icon type="user" />{userName}</span>} >
            <Item key="setting:3e"><h3 onClick={() => this.props.logout()} style={{with:"100%"}}>退出</h3></Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}


const mapDispatchToProps= (dispatch) =>{

	return {
		logout:bindActionCreators(logout,dispatch),

	}
}
const mapStateToProps= (state,ownProps) =>{
	return {
		authData:state.login.data

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header) ;
