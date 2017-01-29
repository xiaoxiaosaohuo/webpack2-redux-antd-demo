import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import homeReducer from '../features/home/redux/reducer';

import login from '../feature/login/reducer';
import merchantTagsReducer from '../feature/merchantTags/modules'
//在此导入reducer合并为一个reducer
const rootReducer = combineReducers({
  routing: routerReducer,
  merchantTags:merchantTagsReducer,
  login
});

export default rootReducer;
