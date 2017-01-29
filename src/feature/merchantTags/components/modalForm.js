import React, { PropTypes,Component } from 'react'
import { Row,Col,Select, Radio, Checkbox, Button, Collapse, Form, Icon, Input,DatePicker } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
import styles from './style.css';
const Shopinfo = ({onChange,props}) =>{
	return(
		<Row className={styles.shopinfoHead} type="flex" justify="space-between" align="middle">
			<Col span={15}>
				<Row type="flex" justify="space-between" align="middle" className={styles.rowHeight}>
				<Col span={8}  className={styles.iconCenter}>
					<Icon type="apple" className={styles.shopinfoIcon} ></Icon>
				</Col>
				<Col span={14} >
					<h2>{props.props.state.claimInfo.data.name}</h2>
					<p>集团：<span>xxxx集团</span></p>
					<p>电话：<span>400-5255324-32413</span></p>
					<p>地址：<span>宇宙地球中国北京</span></p>
				</Col>
				</Row>
			</Col>
			<Col span={8}>
				<div className={styles.shopNumber}>店铺编号：<span>565574</span></div>
			</Col>
		</Row>

  )}


class LostReason extends Component {

  	  render(){
		  const formItemLayout = {
	  	   labelCol: { span: 5 },
	  	   wrapperCol: { span: 16 },
	  		  };
		  return (
  		  <div>
  		  <FormItem
  	          {...formItemLayout}
  	          label="流失原因：">
  	           {this.props.getFieldDecorator("select8",{
  	         rules: [
  	             { required: true, message: '请选择流失原因' }
  	         ],
  	     })(
  	         <Select  placeholder="请选择流失原因" style={{ width: '62%' }}>
  	           <Select.Option value="china">中国</Select.Option>
  	           <Select.Option value="use">美国</Select.Option>
  	           <Select.Option value="japan">日本</Select.Option>
  	           <Select.Option value="korean">韩国</Select.Option>
  	           <Select.Option value="Thailand">泰国</Select.Option>
  	         </Select>
  	     )}
  	      </FormItem>
  	      <FormItem
  	          {...formItemLayout}
  	          label="原因备注：">
  	           {this.props.getFieldDecorator("cause")(
  	         <Input type="textarea" style={{width:"62%"}} placeholder="请填写流失原因的备注" autosize={{ minRows: 2, maxRows: 4 }} />
  	     )}
  	      </FormItem>
  	  </div>
  )}
}

class EstimatedTime extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const formItemLayout = {
		 labelCol: { span: 5 },
		 wrapperCol: { span: 16 },
			};
		return(
			<FormItem
                {...formItemLayout}
                label="恢复时间">
                 {this.props.getFieldDecorator("date-picker",{
                    rules: [{ type: 'object', required: true, message: '请选择预计恢复营业时间!' }],
           })(
               <DatePicker style={{width:"62%"}}/>
           )}
            </FormItem>
		)
	}
}

class OnlineTiem extends Component{
	render(){
		const formItemLayout = {
		 labelCol: { span: 5 },
		 wrapperCol: { span: 16 },
			};
		return(
			<FormItem
                {...formItemLayout}
                label="上线日期">
                 {this.props.getFieldDecorator("date-picker",{
                    rules: [{ type: 'object', required: true, message: '请选择上线日期!' }],
           })(
               <DatePicker style={{width:"62%"}}/>
           )}
            </FormItem>
		)
	}
}
//模态框表单
  const provinceData = ['浙江', '江苏'];
  const cityData = {
	'浙江': ['杭州', '西湖', '温州'],
	'江苏': ['南京', '苏州', '镇江'],
  };
class ModalForm extends Component{
	constructor(props){
		super(props)
		this.state={
			cities:cityData[provinceData[0]],
			secondCity:cityData[provinceData[0]][0],
			shopStatus:""
		}
		this.handleProvinceChange = this.handleProvinceChange.bind(this);
		this.onSecondCityChange = this.onSecondCityChange.bind(this);
		this.handleSelf = this.handleSelf.bind(this);
		this.handleShopStatus = this.handleShopStatus.bind(this);
	}
	handleProvinceChange(value){
		this.setState({
			cities:cityData[value],
			secondCity:cityData[value][0],
		})
	}
	onSecondCityChange(value){
		this.setState({
			secondCity:value
		})
	}
	handleSelf(){
		//标记为自己
		this.props.props.form.setFieldsValue({"sales":"japan"})
	}
	//店铺状态
	handleShopStatus(value){
		// alert(2)
		this.setState({shopStatus:value})
	}
	render(){
		const { getFieldDecorator } = this.props.props.form;
   	 const formItemLayout = {
   	 labelCol: { span: 5 },
   	 wrapperCol: { span: 16 },
      	};
	const formItemLayouttwo = {
		labelCol: { span: 12 },
      	 wrapperCol: { span: 12 },
         	};

   	const radioconfig = {
         rules: [
           { required: true, message: '请选择适用范围',}
         ],
       };
  const provinceOptions = provinceData.map(province => <Option key ={ province }> {province}</Option>);
  const cityOptions = this.state.cities.map(city => <Option key ={city}> {city}</Option>)
  const shopStatus = this.state.shopStatus;

	return (
		<div>
 			<Shopinfo onChange={this.props.props.onChange} props={this.props.props}></Shopinfo>
			<Form horizontal onSubmit = {this.props.handleSubmit}>

				  <FormItem
					 {...formItemLayout}
					 label="是否测试">
					 {getFieldDecorator("radio",radioconfig)(
				   <RadioGroup >
					 <Radio value="male" >该店铺为测试店铺</Radio>
					 <Radio value="female" >该集团为测试集团</Radio>
				   </RadioGroup>
				   )}
				 </FormItem>
				 	<div style={{width:"100%"}}>
					 <Row>
						 <Col span={10} >
						 <FormItem
			                 {...formItemLayouttwo}
			                 label="机构类型">

							 {getFieldDecorator("company0",{
								rules: [
									{ required: true, message: '请选择分公司' }
								],
							})(
								<Select  placeholder="请选择分公司"  onChange={this.handleProvinceChange} style={{ width: '100%' }} className={"twoSelectleft"}>
								  {provinceOptions}
								</Select>
							)}
							 </FormItem>
						 </Col>
						 <Col span={5}>
						 <FormItem>
						 {getFieldDecorator("company1",{
							rules: [
								{ required: true, message: '请选择分公司' }
							],
						})(
						   <Select  onChange = {this.onSecondCityChange} placeholder="请选择分公司" style={{ width: '100%' }} className={'twoSelectRight'}>
							 {cityOptions}
						   </Select>
					   )}
						   </FormItem>
						 </Col>
					 </Row>
				</div>

				 <FormItem
	                 {...formItemLayout}
	                 label="销售人员">
	   				  {getFieldDecorator("sales",{
	   			    rules: [
	   			        { required: true, message: '请选择销售人员' }
	   				],
	   			})(
	   				<Select  placeholder="销售人员" style={{ width: '62%' }}>
	   	              <Select.Option value="china">中国</Select.Option>
	   	              <Select.Option value="use">美国</Select.Option>
	   	              <Select.Option value="japan">日本</Select.Option>
	   	              <Select.Option value="korean">韩国</Select.Option>
	   	              <Select.Option value="Thailand">泰国</Select.Option>
	   	            </Select>
	   			)}
					<span style={{width:'30%'}} className={styles.selftag} onClick={this.handleSelf}><Icon type="pushpin-o" /> 标记为自己</span>
	             </FormItem>
				 <FormItem
	                 {...formItemLayout}
	                 label="销售人员">
	   				  {getFieldDecorator("select3",{
	   			    rules: [
	   			        { required: true, message: '请选择销售人员' }
	   				],
	   			})(
	   				<Select  placeholder="请选择销售人员" style={{ width: '62%' }}>
	   	              <Select.Option value="china">中国</Select.Option>
	   	              <Select.Option value="use">美国</Select.Option>
	   	              <Select.Option value="japan">日本</Select.Option>
	   	              <Select.Option value="korean">韩国</Select.Option>
	   	              <Select.Option value="Thailand">泰国</Select.Option>
	   	            </Select>
	   			)}
				<span style={{width:'30%'}} className={styles.selftag}><Icon type="pushpin-o" /> 标记为自己</span>
	             </FormItem>
				 <FormItem
	                 {...formItemLayout}
	                 label="实施人员：">
	   				  {getFieldDecorator("select4",{
	   			    rules: [
	   			        { required: true, message: '请选择实施人员' }
	   				],
	   			})(
	   				<Select  placeholder="请选择实施人员" style={{ width: '62%' }}>
	   	              <Select.Option value="china">中国</Select.Option>
	   	              <Select.Option value="use">美国</Select.Option>
	   	              <Select.Option value="japan">日本</Select.Option>
	   	              <Select.Option value="korean">韩国</Select.Option>
	   	              <Select.Option value="Thailand">泰国</Select.Option>
	   	            </Select>
	   			)}
				<span style={{width:'30%'}} className={styles.selftag}><Icon type="pushpin-o" /> 标记为自己</span>
	             </FormItem>
				 <FormItem
	                 {...formItemLayout}
	                 label="运营人员：">
	   				  {getFieldDecorator("select5",{
	   			    rules: [
	   			        { required: true, message: '请选择运营人员' }
	   				],
	   			})(
	   				<Select  placeholder="请选择运营人员" style={{ width: '62%' }}>
	   	              <Select.Option value="china">中国</Select.Option>
	   	              <Select.Option value="use">美国</Select.Option>
	   	              <Select.Option value="japan">日本</Select.Option>
	   	              <Select.Option value="korean">韩国</Select.Option>
	   	              <Select.Option value="Thailand">泰国</Select.Option>
	   	            </Select>
	   			)}
	             </FormItem>

				<FormItem
					{...formItemLayout}
					label="支付人员：">
					 {getFieldDecorator("select6",{
				   rules: [
					   { required: true, message: '请选择支付人员' }
				   ],
			   })(
				   <Select  placeholder="请选择支付人员" style={{ width: '62%' }}>
					 <Select.Option value="china">中国</Select.Option>
					 <Select.Option value="use">美国</Select.Option>
					 <Select.Option value="japan">日本</Select.Option>
					 <Select.Option value="korean">韩国</Select.Option>
					 <Select.Option value="Thailand">泰国</Select.Option>
				   </Select>
			   )}
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="店铺状态：">
					 {getFieldDecorator("select7",{
				   rules: [
					   { required: true, message: '请选择店铺状态' }
				   ],
			   })(
				   <Select  placeholder="请选择店铺状态" style={{ width: '62%' }} onChange = {this.handleShopStatus}>
					 <Select.Option value="0">店铺已流失</Select.Option>
					 <Select.Option value="1">暂停营业</Select.Option>
					 <Select.Option value="2">待上线</Select.Option>
					 <Select.Option value="3">已上线</Select.Option>
				   </Select>
			   )}
				</FormItem>
				{shopStatus == "0" ?
				<LostReason getFieldDecorator ={getFieldDecorator} ></LostReason>:shopStatus == "1" ?
				<EstimatedTime getFieldDecorator ={getFieldDecorator}></EstimatedTime>:shopStatus == "2" ?
				<div></div>:shopStatus == "3" ?
				<OnlineTiem getFieldDecorator ={getFieldDecorator}></OnlineTiem>:<div></div>}
			</Form>
		</div>
	)}
}

ModalForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
export default ModalForm;
