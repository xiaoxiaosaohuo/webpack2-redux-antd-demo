import React,{Component} from 'react';
import config from '../common/configPage';
class Main extends Component{

    render(){
        const id = this.props.featureId;
        const Data = config.main.components[id];
        const Feature = Data.component.default;
        const title = Data.title;
        return(
            config.userInfo.permission?
            <div key={id}><h3 className="">{title}</h3>
            <Feature params={this.props.params || ''}/></div>:
            <div className="">
                您暂无权限处理该系统工作，请先
                <a href={config.userInfo.loginUrl}>登录</a>
                或者找相关人员申请权限。
            </div>

        )
    }
}
export default Main;
