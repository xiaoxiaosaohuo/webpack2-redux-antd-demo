import React, { Component,PropTypes } from 'react';

import {  bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { Row,Col,Button,Form, Icon,Input,Select,Checkbox,QueueAnim} from 'antd';
const createForm = Form.create;
const Option = Select.Option;

import styles from './components/style.css';
import ClaimMerchatModal from './components/modal';
import TableList from "./components/tablelist"
import SearchForm from "./components/searchForm"

import {claim,filterByAll,filterBySale,filterBySearch} from './modules'

class ClaimMerchat extends Component{
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
		const values = {
	        ...fieldsValue

	      };
		if(!!fieldsValue['date-picker']){
			values["date-picker"]=fieldsValue['date-picker'].format("YYYY-MM-DD")
		}
		console.log('Submit!!!');
		console.log(values);
	  });
	}
	render(){
		return(
			<div>
			<ClaimMerchatModal visible = {this.props.visible}
			 handleSubmit= {this.handleSubmit}
			  handleCancel = {this.props.handleCancel}
			   handleReset = {this.handleReset}
			   onChange = {this.onChange}
			   props={this.props}>
			</ClaimMerchatModal>
			</div>
		)
	}
}
ClaimMerchat = createForm()(ClaimMerchat)
class MerchantTags extends Component  {
	constructor(props){
		super(props);
		this.state = {
			modalVisible:false
		};
		this.handleCancel = this.handleCancel.bind(this);
		this.showModal=this.showModal.bind(this);
		this.onClaim=this.onClaim.bind(this);
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	handleSubmit(e){
		alert(2)
	}
	showModal(){
		this.setState({modalVisible: true})
	}
	handleCancel(){
		this.setState({
		modalVisible:false
		})
	}
	onClaim(index,record){
		this.setState({modalVisible: true})
		this.props.claim(index,record)
	}
	componentWillMount(){
		// alert(2)
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps)

	}
	handleSearch(value){
		console.log("----------------")
		console.log(value);
		this.props.filterBySearch(value)
	}
	handleChange1(value){


		this.props.filterByAll(value)

	}
	handleChange2(value){


		this.props.filterBySale(value)

	}
	render(){
		let options = [<Option key = "0" >Jack</Option>,
		<Option key = "1" >Lucy</Option>,
		<Option key = "2" >yiminghe</Option>,
		<Option key = "3" >Jack1</Option>,
		<Option key = "4" >Lucy1</Option>,
		<Option key = "5" >yiminghe1</Option>,
		<Option key = "6" >Jack2</Option>]
		return (
			<div>

				<SearchForm handleChange1={this.handleChange1} handleChange2={this.handleChange2} options= {options} handleSearch={this.handleSearch}></SearchForm>

				<ClaimMerchat visible={this.state.modalVisible}
				 props={this.props}
				  handleCancel={this.handleCancel}
				 ></ClaimMerchat>
				 <TableList onClaim={this.onClaim}></TableList>
			</div>
		)
	}
}
const mapStateToProps = state => ({
  state: state.merchantTags
})

const mapDispatchToProps = dispatch => ({
  claim: bindActionCreators(claim, dispatch),
  filterByAll:bindActionCreators(filterByAll,dispatch),
  filterBySale:bindActionCreators(filterBySale,dispatch),
  filterBySearch:bindActionCreators(filterBySearch,dispatch)



})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantTags)
