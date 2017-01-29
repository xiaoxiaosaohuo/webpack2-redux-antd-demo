import React, { Component,PropTypes } from 'react'
import { Row,Col,Modal,Select, Radio, Checkbox, Button, DatePicker, InputNumber, Form, Cascader, Icon, Input } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;
import moment from "moment" ;

//导入列表组件、
import TableList from "./tablelist"
////////// Modal //////////
class DemoValidateOtherFormModal extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    alwaysPropagate: PropTypes.bool,
    onSubmit: PropTypes.func, /* function onSubmit(form) */
    onCancel: PropTypes.func, /* function onCancel() */
  }

  static defaultProps = {
    alwaysPropagate: false,
  }

  constructor(props) {
    super(props);
    this.state = {visible: this.props.visible};
	this.handleReset= this.handleReset.bind(this);
	this.handleReset= this.handleReset.bind(this);
  	this.handleSubmit= this.handleSubmit.bind(this);
	this.checkBirthday= this.checkBirthday.bind(this);
	this.checkPrime= this.checkPrime.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({visible: newProps.visible});
  }

  componentDidMount() {
    this.props.form.setFieldsValue({
      eat: true,
      sleep: false,
      beat: true,
    });
  }

  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, fieldsValue) => {
		if (!!errors) {
        console.log('Errors in form!!!', errors);
        return;
      }

	const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      };
      console.log('Submit!!!');
      console.log(values);
    });
  }

  checkBirthday(rule, value, callback) {
    if (value && value.getTime() >= Date.now()) {
      callback(new Error('你不可能在未来出生吧!'));
    } else {
      callback();
    }
  }

  checkPrime(rule, value, callback) {
    if (value !== 11) {
      callback(new Error('8~12之间的质数明明是11啊!'));
    } else {
      callback();
    }
  }

  render() {
    const address = [{
      value: 'zhejiang',
      label: '浙江',
      children: [{
        value: 'hangzhou',
        label: '杭州',
      }],
    }];
    const { getFieldDecorator } = this.props.form;

	const config = {
	      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
	    };
    const multiSelectconfig = {
      rules: [
        { required: true, message: '请选择您喜欢的颜色', type: 'array' },
      ]
    };
    const radioconfig = {
      rules: [
        { required: true, message: '请选择您的性别'}
      ],
    };

    const primeNumberconfig ={
      rules: [{ validator: this.checkPrime }],
    };
    /*
    const addressProps = getFieldProps('address', {
      rules: [{ required: true, type: 'array' }],
    });
    */
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };

    const ModalFooter = (
      <div>
        <Button type="ghost"
                onClick={(e) => {this.handleReset(e)}}>重置</Button>
        <Button type="primary"
                onClick={(e) => {this.handleSubmit(e)}}>确定</Button>
      </div>
  );

    console.log('sleep field >>>>', getFieldDecorator('sleep', {valuePropName: 'checked'}));
    return (
      <Modal title="新增人员"
             visible={this.state.visible}
             footer={ModalFooter}
             onCancel={(e) => {this.props.onCancel(e)}}>
        <Form horizontal>
          <FormItem
              {...formItemLayout}
              label="国籍：">
				  {getFieldDecorator("select",{
			    rules: [
			        { required: true, message: '请选择您的国籍' }
				],
			})(
				<Select  placeholder="请选择国家" style={{ width: '100%' }}>
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
		 label="颜色">
		 {getFieldDecorator('select-multiple', multiSelectconfig)(
		   <Select multiple placeholder="请选择最喜欢的颜色">
			 <Select.Option value="red">Red</Select.Option>
			 <Select.Option value="green">Green</Select.Option>
			 <Select.Option value="blue">Blue</Select.Option>
		   </Select>
		 )}
	   </FormItem>


          <FormItem
              {...formItemLayout}
              label="性别：">
			  {getFieldDecorator("radio",radioconfig)(
            <RadioGroup>
              <Radio value="male">男</Radio>
              <Radio value="female">女</Radio>
            </RadioGroup>
			)}
			<span><Icon type="info-circle-o" /> 暂不支持其它性别</span>
          </FormItem>

          <FormItem
              {...formItemLayout}
              label="兴趣爱好：">
            <Checkbox {...getFieldDecorator('eat', {
                valuePropName: 'checked',
              })} />吃饭饭
            <Checkbox {...getFieldDecorator('sleep', {
                valuePropName: 'checked',
              })} />睡觉觉
            <Checkbox {...getFieldDecorator('beat', {
                valuePropName: 'checked',
              })} />打豆豆
          </FormItem>

		  <FormItem
	          {...formItemLayout}
	          label="DatePicker"
	        >
          {getFieldDecorator('date-picker', config)(
            <DatePicker />
          )}
        </FormItem>

          <FormItem
              {...formItemLayout}
              label="8~12间的质数：">
			  {getFieldDecorator('primeNumber', primeNumberconfig)(
            <InputNumber min={8} max={12} />
			)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

DemoValidateOtherFormModal =  Form.create()(DemoValidateOtherFormModal);

class SettingRole extends Component{
	constructor(props){
		super(props)
		console.log(this)
		this.state={
			ModalText: '',
	        rawModalVisible: false,
		}
		this.onSubmitRaw = this.onSubmitRaw.bind(this);
		this.onCancelRaw = this.onCancelRaw.bind(this);

	}
	onCancelRaw (e) {
      console.log('Cancel raw modal clicked');
      this.setState({rawModalVisible: false});
    }
	onSubmitRaw (e, form) {
      console.log('onSubmitRaw:', form);
      console.log('Values:', form.getFieldsValue());
      message.success('提交成功!', 2);
      this.setState({rawModalVisible: false});
    }

	render(){

		return (
			<div>
			<Row type="flex" justify="space-between">
				<Col>
					<Button type="primary" onClick={() => this.setState({rawModalVisible: true})}  style={{marginRight: 20}} icon="user" >增加人员</Button>
				</Col>
				<Col>
					<Form inline >
						 <Input addonAfter={<Icon type="search" />} defaultValue="搜索"  onPressEnter={value => console.log(value)}/>
				  </Form>
				</Col>
			</Row>
			<DemoValidateOtherFormModal
                visible={this.state.rawModalVisible}
                onCancel={this.onCancelRaw}
                onSubmit={this.onSubmitRaw} >
			</DemoValidateOtherFormModal>
			<TableList></TableList>
		  </div>
		)
	}
}
export default SettingRole;
