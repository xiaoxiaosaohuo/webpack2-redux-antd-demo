
// 样式
// js
import React,{ Component }from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import "../styles/antd.css";
import "../styles/layout.css";
// import "../styles/fonts/style.css";
// import "../components/style.css"
import { Row, Col } from 'antd';
import Header from '../components/Header';
import Sider from '../components/Sider';
import Main from '../components/Main';
import NavPath from '../components/NavPath';
import { connect } from 'react-redux'
import { logout } from '../feature/login/actions'
class App extends Component{

    constructor(props){
		super(props)
        console.log( this.props)
        this.state=({
            params:  this.props.params,
			collapse: true,
        })
    }
	onCollapseChange() {
	    this.setState({
	      collapse: !this.state.collapse,
	    })
	}

    render(){
		const collapse = this.state.collapse;
		return(
        	<div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
				<aside className="ant-layout-sider">
					<Sider />
				</aside>
	            <div className="ant-layout-main" style={{height:"100%"}}>

					<Header />
	                <section className="ant-layout-container" style={{height:'calc(100% - 62px)'}}>

						<div className="ant-layout-content" style={{height:"100%"}}>
						{this.props.children}

						</div>
					</section>
	            </div>
        	</div>
        )
	}

};

const mapDispatchToProps= (dispatch) =>{

	return {
		logout:bindActionCreators(logout,dispatch),

	}
}
const mapStateToProps= (state,ownProps) =>{
	return {
		authData:ownProps.authData

	}
}
export default connect(false, mapDispatchToProps)(App)
