import React, {Component}from 'react';
import { Provider } from 'react-redux';

import Routes from '../routes';
import {getCookie} from '../common/utils';
export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Routes history={history}></Routes>
      </Provider>
    );
  }
}
