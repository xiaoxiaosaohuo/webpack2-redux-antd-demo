import React, { Component,PropTypes } from 'react';
import { Row,Col,Button,Form, Icon,Input} from 'antd';
const createForm = Form.create;
import AuthModal from './authModal';
class AddAuth extends Component{
	constructor(props){
		super(props);
		this.handleReset = this.handleReset.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	handleReset(e) {
	  e.preventDefault();
	  this.props.form.resetFields();
	}
	onChange (checkedValues){
		console.log('checked = ', checkedValues);
	}
	handleSubmit(e) {
	  e.preventDefault();
	  this.props.form.validateFieldsAndScroll((errors, fieldsValue) => {
		  if (!!errors) {
		  console.log('Errors in form!!!', errors);
		  return;
		}

	//   const values = {
	// 	  ...fieldsValue,
	// 	  'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
	// 	};
		console.log('Submit!!!');
		console.log(fieldsValue);
	  });
	}
	render(){
		return(
			<div>
			<AuthModal visible = {this.props.visible}
			 handleSubmit= {this.handleSubmit}
			  handleCancel = {this.props.handleCancel}
			   handleReset = {this.handleReset}
			   onChange = {this.onChange}
			   props={this.props}>
			</AuthModal>
			</div>
		)
	}
}
AddAuth = createForm()(AddAuth)
class SettingAuth extends Component  {
	constructor(props){
		super(props);
		this.state = {modalVisible:false};
		this.handleCancel = this.handleCancel.bind(this);

	}
	handleSubmit(e){
		alert(2)
	}

	handleCancel(){
		this.setState({
		modalVisible:false
		})
	}
	render(){
		return (
			<div>
			{/* <AuthForm handleSubmit ={this.handleSubmit} ></AuthForm> */}
			<Row type="flex" justify="space-between">
				<Col>
					<Button type="primary" onClick={() => this.setState({modalVisible: true})}  style={{marginRight: 20}} icon="user" >新增权限</Button>
				</Col>
				<Col>
					<Form inline >
						 <Input addonAfter={<Icon type="search" />} defaultValue="搜索"  onPressEnter={value => console.log(value)}/>
				  	</Form>
				</Col>
			</Row>
			<AddAuth visible={this.state.modalVisible}
			 props={this.props}
			  handleCancel={this.handleCancel}
			 ></AddAuth>
			</div>
		)
	}
}
export default SettingAuth ;
