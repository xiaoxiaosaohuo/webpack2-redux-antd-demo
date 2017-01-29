
import React, { PropTypes,Component } from 'react'
import { Row,Col,Select, Checkbox, Form, Icon,Button,Input} from 'antd';
import classNames from 'classnames';
const FormItem = Form.Item;
const Option = Select.Option;
import styles from './style.css';
class SearchForm  extends Component{
	constructor(props){
		super(props);
		this.state={
			value:"",
			focus:false,
		}
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		// this.handleSearch = this.handleSearch.bind(this);
	}
	handleChange(e){
		console.log(e.target.value)
		this.setState({value:e.target.value})
	}
	handleSubmit(){
		console.log(this.state.value)
	}
	handleFocus() {
   		this.setState({ focus: true });
	 }
	handleBlur() {
	   this.setState({ focus: false });
	 }
	// handleSearch(value){
	// 	 console.log(value)
	//  }
	render(){
		const btnCls = classNames({
	      'ant-search-btn': true,
	      'ant-search-btn-noempty': !!this.state.value,
	    });
	    const searchCls = classNames({
	      'ant-search-input': true,
	      'ant-search-input-focus': this.state.focus,
	    });
	return(
			<div>
		<Row type="flex" justify="end" className={styles.borderbottom}>

			<Col >
				<Form inline >
					<div className="ant-search-input-wrapper" style={{width: 200 }}>
				        <Input.Group className={searchCls}>
				          <Input.Search
						  	onChange = {this.handleChange}
				            placeholder="搜索"
							onSearch = {this.props.handleSearch}
				            onFocus={this.handleFocus}
				            onBlur={this.handleBlur}
				          >
				          </Input.Search>
				          <div className="ant-input-group-wrap">
				            <Button className={btnCls} onClick={() =>(this.props.handleSearch(this.state.value))}>
				              <Icon type="search" />
				            </Button>
				          </div>
				        </Input.Group>
				      </div>
				</Form>
			</Col>
		</Row>
	<Form inline className="merchantTags">
		<Row type="flex" justify="space-between">
			<Col>
				<FormItem>
				<Select  style={{ width: 120,marginLeft:5}} placeholder="全部主体" showSearch optionFilterProp="children" onChange={this.props.handleChange1} allowClear={true}>
				  {this.props.options}


				</Select>
				</FormItem>
				<FormItem>
				<Select  style={{ width: 120,marginLeft:5 }}  placeholder="待上线" showSearch optionFilterProp="children" onChange={this.props.handleChange2} allowClear={true}>
				  <Option value="jack">Jack</Option>
				  <Option value="lucy">Lucy</Option>
				  <Option value="Yiminghe">yiminghe</Option>
				</Select>
				</FormItem>
				<FormItem>
				<Select  style={{ width: 120 ,marginLeft:5}} placeholder="店铺流失原因" >
				  <Option value="jack">Jack</Option>
				  <Option value="lucy">Lucy</Option>
				  <Option value="Yiminghe">yiminghe</Option>
				</Select>
				</FormItem>
				<FormItem>
				<Select  style={{ width: 120,marginLeft:5 }} placeholder="销售人员未标记">
				  <Option value="jack">Jack</Option>
				  <Option value="lucy">Lucy</Option>
				  <Option value="Yiminghe">yiminghe</Option>
				</Select>
				</FormItem>
				<FormItem>
				<Select  style={{ width: 120,marginLeft:5 }} placeholder="实施人员未标记" >
				  <Option value="jack">Jack</Option>
				  <Option value="lucy">Lucy</Option>
				  <Option value="Yiminghe">yiminghe</Option>
				</Select>
				</FormItem>
				<FormItem>
				<Select  style={{ width: 120,marginLeft:5 }} placeholder="运营人员未标记" >
				  <Option value="jack">Jack</Option>
				  <Option value="lucy">Lucy</Option>
				  <Option value="Yiminghe">yiminghe</Option>
				</Select>
				</FormItem>
				<FormItem>
				<Select  style={{ width: 120,marginLeft:5 }} placeholder="支持人员未标记" >
				  <Option value="jack">Jack</Option>
				  <Option value="lucy">Lucy</Option>
				  <Option value="Yiminghe">yiminghe</Option>
				</Select>
				</FormItem>

			</Col>
			<Col>
				<FormItem>
					<Checkbox >测试集团</Checkbox>
				</FormItem>
				
			</Col>
		</Row>
	</Form>
	</div>
)}
}

export default SearchForm
