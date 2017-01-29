import React,{PropTypes,Component} from 'react';
import {Form,Input,Button,Row,Col,notification,Card,Icon} from 'antd';
import {bindActionCreators} from 'redux';
import { routerActions } from 'react-router-redux'

import {connect} from 'react-redux';
import {login,getCaptcha}  from './actions'


import styles from './login.css'
const FormItem = Form.Item;

const contextTypes ={
	router:PropTypes.object.isRequired,
	store:PropTypes.object.isRequired
}
class Login extends Component  {
	constructor(props) {
		super(props);
		this.state={
			disabled:false,
			totaltime:6,
			mobileNone:false
		}
		this.handleInterval = this.handleInterval.bind(this)
	}
	static propTypes = {
      login: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired
    };

	componentDidMount() {
		console.log(this.props)
      const { isAuthenticated, replace, redirect } = this.props;
	  let time = localStorage.getItem(localStorage.getItem("mobile")+"total")||0;

      if (isAuthenticated) {
        replace(redirect)
      }
	  if(time>0){
		  this.props.form.setFieldsValue("mobile","15191615678")
		  this.handleInterval(time)

	  }
    }
	componentWillReceiveProps(nextProps) {

      const { isAuthenticated, replace, redirect } = nextProps
      const { isAuthenticated: wasAuthenticated } = this.props

console.log(nextProps)
      if (!wasAuthenticated && isAuthenticated) {
		  alert(3)
        replace(redirect);

      }
    }

	componentWillReceiveProps(nextProps){
		const error = nextProps.loginErrors;
		const isLoggingIn = nextProps.loggingIn;
		const user = nextProps.user;
		if(error != this.props.loginErrors && error){
			notification.error({
				message:"登录失败",
				description:error
			})
		}
		if(!isLoggingIn && !error && user){
			notification.success({
				message:"登录成功",
				description:"欢迎"+user,
				icon: <Icon type="smile-circle" style={{ color: '#2db7f5' }} />
			})
		}
		if(user){
			this.context.router.replace("/home");
		}
	}

	handleSubmit(e){
		e.preventDefault()
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
			const data = this.props.form.getFieldsValue();
			console.log(data)
			this.props.login({name:data.mobile,code:data.captcha});
		}else{
			return false
		}
	    });

		// this.props.isAuthenticated = data.mobile;
	}
	handleCaptcha(e){
		e.preventDefault()

		let mobile = this.props.form.getFieldValue("mobile");
		if(mobile){

			localStorage.setItem("mobile",mobile);
			let total = mobile+"total";
			localStorage.setItem(total,6);
			let time = localStorage.getItem(total);
			this.handleInterval(time)
			//把号码发送到后台获取验证码
			this.props.getCaptcha({mobile:mobile})
		}else{
			this.setState({
				mobileNone:true
			})
		}




	}

	handleInterval(time){
		this.setState({
			totaltime:time,
			disabled:true
		})
		const timer = setInterval( () =>{
			this.setState({
				totaltime:time
			})
			time --;
			localStorage.setItem(localStorage.getItem("mobile")+"total",time);
			if(time==0){
				clearInterval(timer);
				this.setState({
					totaltime:0,
					disabled:false
				})
			}
		}, 1000);

	}
	render(){
		const {getFieldDecorator} = this.props.form;
		const disabled = this.state.disabled;
		const totaltime = this.state.totaltime;
		return (
			<Row className = {styles.loginrow} type='flex' justify='space-around'  align = 'middle'>
			<Card title="用户登录" bordered={false} style={{ width: 400,borderRadius:0}} className="login">

					<Form horizontal onSubmit = {this.handleSubmit.bind(this)} className={styles.loginform}>

						<FormItem label="" labelCol={{span:6}} wrapperCol = {{span:24}}>
						{getFieldDecorator('mobile', {
				            rules: [{ required: true, message: '请输入手机号!' ,pattern:/(^(13\d|15[^4,\D]|17[13678]|18\d)\d{8}|170[^346,\D]\d{7})$/}],
				          })(
							  <Input className={styles.mobile} addonBefore={<Icon type="mobile" />} placeholder="手机号" />
				          )}
						</FormItem>
						<FormItem label="" labelCol={{span:6}} wrapperCol={{span:24}}>
							<Row gutter={4} type="flex" justify="space-between">
								<Col span={12}>
								  {getFieldDecorator('captcha', {
									rules: [{ required: true, message: '请输入验证码!',
									pattern:/^[a-zA-Z0-9]{4}$/}],
								  })(
									<Input size="large" className={styles.mobile} placeholder="动态密码"/>
								  )}
								</Col>
								<Col span={10}>
								{disabled?<Button size="large" onClick ={this.handleCaptcha.bind(this)}  className={styles.mobile} disabled >重新发送（{totaltime}s）</Button>
								:<Button size="large" onClick ={this.handleCaptcha.bind(this)}  className={styles.mobile}  >发送动态密码</Button>
								}
								</Col>
							  </Row>
						</FormItem>

						<FormItem>
				          <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
				            登录
				          </Button>
				        </FormItem>
					</Form>
			</Card>
			</Row>

		)
	}
}
Login.contextTypes = contextTypes;
// Login.propTypes = proptypes;
Login = Form.create()(Login);


const mapStateToProps = (state, ownProps) =>{

	const isAuthenticated = state.login.name || false
    const redirect = ownProps.location.query.redirect || '/'
    return {
      isAuthenticated,
      redirect
    }
}


const mapDispatchToProps= (dispatch) =>{

	return {
		login:bindActionCreators(login,dispatch),
		getCaptcha:bindActionCreators(getCaptcha,dispatch),
		replace: routerActions.replace
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
