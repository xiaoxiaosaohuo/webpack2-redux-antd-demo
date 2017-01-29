import React from 'react';
import { Router,Route,IndexRoute } from 'react-router';

import DevTools from '../containers/DevTools'
import { UserIsAuthenticated, UserIsNotAuthenticated,UserIsAdmin } from '../common/auth'
import App from '../components/App';
import Home from '../containers/Home';
import Login from '../feature/login/';
import Login1 from '../feature/login1';
import NotFound from '../containers/NotFound';
import SettingRole from '../feature/settingRole';
import SettingAuth from '../feature/settingAuth';
import SettingOrg from '../feature/settingOrg';
import MerchantTags from '../feature/merchantTags';

 const Routes = ({history}) => {
    return (
    <div className="page-wrapper">
        <Router history={history} >

            <Route path="/">
                <IndexRoute component={UserIsAuthenticated(App)}/>

                <Route path="/" component={App}>
                    <Route path="/login1" component={Login1} />
                    <Route path='/settingRole' component={UserIsAuthenticated(SettingRole)} />
                    <Route path='/settingAuth' component={SettingAuth} />
                    <Route path='/settingOrg' component={SettingOrg} />
                    <Route path='/merchantTags' component={UserIsAuthenticated(MerchantTags)} />
                </Route>
                <Route path="login" component={UserIsNotAuthenticated(Login)}/>
                <Route path='*' component={NotFound} />
            </Route>
        </Router>
        <DevTools/>
    </div>
    )
};
export default Routes;
