import React from "react";
import { Table, Button } from 'antd';
import { VelocityComponent, VelocityTransitionGroup, velocityHelpers } from 'velocity-react'
import 'velocity-animate/velocity.ui'
import {enterAnimation,leaveAnimation} from '../animate/animate';

// const columns = [{
//   title: 'Name',
//   dataIndex: 'name',
// }, {
//   title: 'Age',
//   dataIndex: 'age',
// }, {
//   title: 'Address',
//   dataIndex: 'address',
// }];
//
// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }
//
// const TableList = React.createClass({
//   getInitialState() {
//     return {
//       selectedRowKeys: [1],  // Check here to configure the default column
//       loading: false,
//     };
//   },
//   start() {
//     this.setState({ loading: true });
//     // ajax request after empty completing
//     setTimeout(() => {
//       this.setState({
//         selectedRowKeys: [],
//         loading: false,
//       });
//     }, 1000);
//   },
//   onSelectChange(selectedRowKeys) {
//     console.log('selectedRowKeys changed: ', selectedRowKeys);
//     this.setState({ selectedRowKeys });
//   },
//   render() {
//     const { loading, selectedRowKeys } = this.state;
//     const rowSelection = {
//       selectedRowKeys,
//       onChange: this.onSelectChange,
//     };
//     const hasSelected = selectedRowKeys.length > 0;
// 	const pagination = {
// 	  total: data.length,
// 	  showSizeChanger: true,
// 	  onShowSizeChange: (current, pageSize) => {
// 		console.log('Current: ', current, '; PageSize: ', pageSize);
// 	  },
// 	  onChange: (current) => {
// 		console.log('Current: ', current);
// 	  },
// 	}

//     return (
//       <div>
//         <div style={{ marginBottom: 16 }}>
//           {/* <Button type="primary" onClick={this.start}
//             disabled={!hasSelected} loading={loading}
//           >Reload</Button> */}
//           <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
//         </div>
// 		<VelocityTransitionGroup ref='container' component='div' enter={enterAnimation} leave={leaveAnimation} runOnMount='true' className='container'>
//         <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination}/>
// 		</VelocityTransitionGroup>
//       </div>
//     );
//   },
// });
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

const data = [{
  key: 1,
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
        name: 'Jim Green jr.',
        age: 25,
        address: 'London No. 3 Lake Park',
      }, {
        key: 1312,
        name: 'Jimmy Green sr.',
        age: 18,
        address: 'London No. 4 Lake Park',
      }],
    }],
  }],
}, {
  key: 2,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

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
const TableList = React.createClass({
render(){
	return (
	      <div>
	        <div style={{ marginBottom: 16 }}>
	          {/* <Button type="primary" onClick={this.start}
	            disabled={!hasSelected} loading={loading}
	          >Reload</Button> */}

	        </div>

	        <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered />

	      </div>
	    );
	}
})
export default TableList
