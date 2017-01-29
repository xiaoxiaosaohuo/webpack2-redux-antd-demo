import React, { Component} from 'react';
import 'whatwg-fetch';
import { concat, sortBy, map,forEach,includes,find,has} from 'lodash'
import { Row,Col,Button,Form, Icon,Input,Popconfirm} from 'antd';
import { VelocityComponent, VelocityTransitionGroup, } from 'velocity-react'
import 'velocity-animate/velocity.ui'
import OrgTable from "./orgTable"
import {enterAnimation,leaveAnimation} from '../animate/animate';
const  parseData =  (data,key,callback) =>{

			if(data){
				data.forEach((ele) =>{

					if(ele.children){
						if(ele.key=="1"){

						ele.children.push({
					  	    key: 1123,
					  	    name: '金鑫看见',
					  	    age: 4299,
					  	    address: '那就看看',
					  	  })
					  }else {
						 parseData(ele.children);
					  }
					}
				});

			}
		}
class SettingOrg extends Component  {
	constructor(props){
		super(props);

		this.state = {
			modalVisible:false,
			data:[{
	  key: "cb833d77-a0ed-4ffb-9354-c4e17a6d72a8",
	  name: 'John Brown sr.',
	  age: 60,
	  address: 'New York No. 1 Lake Park',
	  children: [{
	    key: 11,
	    name: 'John Brown',
	    age: 42,
	    address: 'New York No. 2 Lake Park',
	  }, {
	    key: 12,
	    name: 'John Brown jr.',
	    age: 30,
	    address: 'New York No. 3 Lake Park',
	    children: [{
	      key: 121,
	      name: 'Jimmy Brown',
	      age: 16,
	      address: 'New York No. 3 Lake Park',
	    }],
	  }, {
	    key: 13,
	    name: 'Jim Green sr.',
	    age: 72,
	    address: 'London No. 1 Lake Park',
	    children: [{
	      key: 131,
	      name: 'Jim Green',
	      age: 42,
	      address: 'London No. 2 Lake Park',
	      children: [{
	        key: 1311,
	        name: 'Jim Green jr12121.',
	        age: 25,
	        address: 'London No. 3 Lake Park',
	      }],
	    }],
	  }],
	}, {
	  key: 2,
	  name: 'Joe Black',
	  age: 32,
	  address: 'Sidney No. 1 Lake Park',
	}]

		};

		this.handleExpand = this.handleExpand.bind(this);

	}
	componentDidMount(){

		fetch('http://localhost:3000/mock/mock.json')
	  .then(function(response) {
	    return response.json()
	  }).then(function(json) {
	    console.log('parsed json', json)
		this.data = json;
	  }).catch(function(ex) {
	    console.log('parsing failed', ex)
	  })
	}

	handleExpand(expanded, record){

		console.log(record);

let data = this.state.data;
		parseData(data)
console.log(data)
		// setTimeout(() =>{
		// 	this.setState({
		// 		data:data1
		// 		})
		//
		// },5000)
		this.setState({
				data:data
				})

	}
	render(){
		const columns = [{
		  title: 'Name',
		  dataIndex: 'name',
		  key: 'name',
		  width: '40%',
		}, {
		  title: 'Age',
		  dataIndex: 'age',
		  key: 'age',
		  width: '30%',
		}, {
		  title: 'Address',
		  dataIndex: 'address',
		  key: 'address',
		  width: '30%',
		}];

		const data = this.state.data;
		// rowSelection objects indicates the need for row selection
		const rowSelection = {
		  onChange: (selectedRowKeys, selectedRows) => {
		    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		  },
		  onSelect: (record, selected, selectedRows) => {
		    console.log(record, selected, selectedRows);
		  },
		  onSelectAll: (selected, selectedRows, changeRows) => {
		    console.log(selected, selectedRows, changeRows);
		  },
		};

		return(
			<VelocityTransitionGroup ref='container' component='OrgTable' enter={enterAnimation} leave={leaveAnimation} runOnMount={true} className='container'>
				<OrgTable
				columns={columns}
				rowSelection={rowSelection}
				dataSource={data}
				onExpand = {this.handleExpand}
				 />
			</VelocityTransitionGroup>
		)
	}
}
export default SettingOrg;
