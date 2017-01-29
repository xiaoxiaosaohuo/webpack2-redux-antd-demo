import React from 'react';
import {Row,Col,Spin} from "antd"

export default function Loading() {
  return (
      <Row type="flex" justify="center" align="middle" style={{height:"100%"}}>
          <Col>
             <Spin size="large" />
          </Col>
      </Row>

  )
}
