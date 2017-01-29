import React, { PropTypes } from 'react'
import { Table,Button,Tag } from 'antd';
const TableList= ({onClaim}) =>{

	const columns = [
	  { title: '集团名称', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' ,
	  render:(text,record,index) =>{
		  if(record.istest){
			return <a ><Tag color="#f50">测试</Tag>{text}</a>
		  }
		 return  <a >{text}</a>
	 }

	   },
	  { title: '店铺编号', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
	  { title: '店铺名称', dataIndex: 'address', key: '1' },
	  { title: '城市', dataIndex: 'address', key: '2' },
	  { title: '地址', dataIndex: 'address', key: '3' },
	  { title: '状态', dataIndex: 'address', key: '4' },
	  { title: '所属主体', dataIndex: 'address', key: '5' },
	  { title: '测试店铺', dataIndex: 'address', key: '6' },
	  { title: '签约人员', dataIndex: 'address', key: '7' },
	  { title: ' 运营人员', dataIndex: 'address', key: '8' },
	  { title: ' 实施人员', dataIndex: 'address', key: '9' },
	  { title: ' 支持人员', dataIndex: 'address', key: '10' },
	  {
	    title: '操作',
	    key: 'operation',
	    fixed: 'right',
	    width: 100,
	    render: (text, record, index) => <Button type="primary" onClick={()=>onClaim(index,record)} style={{display:"flex"}} >编辑</Button>,
	  },
	];

	const data = [{
	  key: '1',
	  name: 'John Brown',
	  age: 32,
	  address: 'New York Park',
	  istest:1
	}, {
	  key: '2',
	  name: 'Jim Green',
	  age: 40,
	  address: 'London Park',
	}];
	return(
		<Table columns={columns} dataSource={data} scroll={{ x: 1300 }} bordered />
	)

}

export default TableList;
