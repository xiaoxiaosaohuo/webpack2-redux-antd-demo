import React, {Component} from 'react';
import {Row,Col,Spin} from "antd";

class Hello1 extends Component{
	render(){
		return (
			<Row type="flex" justify="center" align="middle">
		   	 <Col>
		   		<Spin size="large" />
		   	 </Col>
		    </Row>
		)
	}
}
export default Hello1;
