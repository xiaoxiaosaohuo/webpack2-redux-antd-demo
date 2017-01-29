import React, {Component} from 'react';
import {Row,Col,Spin} from "antd"

const NotFound = React.createClass({
  render(){
    return(

		<Row type="flex" justify="center" align="middle" style={{height:"100%"}}>
	   	 <Col>
	   		<Spin size="large" />
	   	 </Col>
	    </Row>

    )
  }
})


export default NotFound;
