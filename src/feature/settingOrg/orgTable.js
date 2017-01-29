import React from "react";
import { Table, Button } from 'antd';

const OrgTable = ({rowSelection,columns,dataSource,onExpand}) =>{
let keys = ["11"]

	return (
	      <div>
	        <div style={{ marginBottom: 16 }}>
	          {/* <Button type="primary" onClick,={this.start}
	            disabled={!hasSelected} loading={loading}
	          >Reload</Button> */}

	        </div>
	        <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            onExpand = {onExpand}
			defaultExpandedRowKeys ={["cb833d77-a0ed-4ffb-9354-c4e17a6d72a8"]}

            />

	      </div>
	    );

}
export default OrgTable
