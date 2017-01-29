import React,{Component} from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
// import Breadcrumbs from "react-router-breadcrumbs";
import Routes from '../routes';

const  NavPath= () =>{
		return (
		<div className="ant-layout-breadcrumb">
		<Breadcrumb>
		    <Breadcrumb.Item>Home</Breadcrumb.Item>
		    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
		    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
		  </Breadcrumb>
		</div>
		)

}
export default NavPath
