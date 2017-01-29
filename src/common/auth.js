import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'
import Loading from '../feature/login/loading'
export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.login.data,
  authenticatingSelector: state => state.login.isLoading,
  LoadingComponent: Loading,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
})

export const UserIsAdmin = UserAuthWrapper({
  authSelector: state => state.login,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/',
  wrapperDisplayName: 'UserIsAdmin',
  predicate: login => login.isAdmin,
  allowRedirectBack: false
})

export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.login,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  // Want to redirect the user when they are done loading and authenticated
  predicate: login => login.data === null && login.isLoading === false,
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
  allowRedirectBack: false
})
export const VisibleOnlyAdmin = UserAuthWrapper({
  authSelector: state => state.login,
  wrapperDisplayName: 'VisibleOnlyAdmin',
  predicate: login => login.isAdmin,
  FailureComponent: null
})
