import React, { PropTypes } from 'react'
import {Button,Modal,Form } from 'antd';
import MerchatForm from './modalForm';
import styles from "./style.css";
const ClaimMerchatModal = ({visible,handleSubmit,handleCancel,handleReset,props,onChange})=>{
	const ModalFooter = (
	    <div>
	        <Button type="ghost"
	                onClick={(e) => {handleReset(e)}}>重置</Button>
	        <Button type="primary"
	                onClick={(e) => {handleSubmit(e)}}>确定</Button>
	    </div>
  		)
	return (
		<Modal title="标记店铺"
	      visible={visible}
		   footer={ModalFooter}
	    //   onOk={handleOk}
	    //   confirmLoading={confirmLoading}
	      onCancel={handleCancel}
		  className ="merchanttags-modalbody"
	    >
		<MerchatForm handleSubmit={handleSubmit} props={props} onChange = {onChange}>

		</MerchatForm>

	    </Modal>
	)
}
// ClaimMerchatModal.propTypes = {
//   visible:PropTypes.bool.isRequired,
//   handleOk: PropTypes.func.isRequired,
//   confirmLoading: PropTypes.bool.isRequired,
//   handleCancel: PropTypes.func.isRequired,
//   handleReset: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired
// }


export default ClaimMerchatModal;
