import React, { PropTypes } from 'react'
import {Button,Modal,Form } from 'antd';
import AuthForm from './authForm';
const AuthModal = ({visible,handleSubmit,handleCancel,handleReset,props,onChange})=>{
	const ModalFooter = (
	    <div>
	        <Button type="ghost"
	                onClick={(e) => {handleReset(e)}}>重置</Button>
	        <Button type="primary"
	                onClick={(e) => {handleSubmit(e)}}>确定</Button>
	    </div>
  		)

	return (
		<Modal title="新增权限"
	      visible={visible}
		   footer={ModalFooter}
	    //   onOk={handleOk}
	    //   confirmLoading={confirmLoading}
	      onCancel={handleCancel}
	    >
		<AuthForm handleSubmit={handleSubmit} props={props} onChange = {onChange}></AuthForm>

	    </Modal>
	)
}
// AuthModal.propTypes = {
//   visible:PropTypes.bool.isRequired,
//   handleOk: PropTypes.func.isRequired,
//   confirmLoading: PropTypes.bool.isRequired,
//   handleCancel: PropTypes.func.isRequired,
//   handleReset: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired
// }


export default AuthModal;
