import React, { PropTypes } from 'react'
import { Row,Col,Select, Radio, Checkbox, Button, Collapse, Form, Icon, Input } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const AuthOfSales = ({onChange,props}) =>{
	const plainOptions = ['Apple', 'Pear'];
	const options = [
	  { label: '权限1', value: 'Apple' },
	  { label: '权限2', value: 'Pear' },
	];
	const optionsWithDisabled = [
	  { label: 'Apple', value: 'Apple' },
	  { label: 'Pear', value: 'Pear' },
	];
	const { getFieldDecorator } = props.form;
	return(
	<Collapse defaultActiveKey={['1']} >
    <Panel header="销售系统权限" key="1">
	<Row type="flex" justify="space-between">
	<Col>
		<FormItem  help="强烈抗议，要求降低室内温度">
		{getFieldDecorator("ddd",{valuePropName: 'checked'})(
		<Checkbox>总部</Checkbox>
	  )}
		 </FormItem>
	</Col>
	<Col>
		<FormItem  help="办公室真他妈热">
		{getFieldDecorator("ccc",{valuePropName: 'checked'})(
		<Checkbox>总部</Checkbox>
	  )}
		 </FormItem>
	</Col>
	<br />
	</Row>
	<CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
	<br />
	<CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>werwer</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>werwer</p>
    </Panel>
  </Collapse>
  )}
const AuthForm = ({handleSubmit,props,onChange})=>{

	console.log(props)
	 const { getFieldDecorator } = props.form;
	 const formItemLayout = {
	 labelCol: { span: 7 },
	 wrapperCol: { span: 12 },
   	};
	const radioconfig = {
      rules: [
        { required: true, message: '请选择适用范围'}
      ],
    };
	return (
		<Form horizontal onSubmit = {handleSubmit}>
		<FormItem
          label="角色名称"
          hasFeedback
		  {...formItemLayout}
        >
          {getFieldDecorator('range', {
            rules: [{
              required: true, message: '请输入角色名称!',
            }],
          })(
            <Input placeholder="输入角色" />
          )}
        </FormItem>
          <FormItem
              {...formItemLayout}
              label="适用范围：">
			  {getFieldDecorator("radio",radioconfig)(
            <RadioGroup>
              <Radio value="male">总部</Radio>
              <Radio value="female">分公司</Radio>
			  <Radio value="female1">经销商</Radio>
            </RadioGroup>
			)}
          </FormItem>
		  <AuthOfSales onChange={onChange} props={props}></AuthOfSales>
		</Form>
)}

AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
export default AuthForm;
