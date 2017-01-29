import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER,GETTING_CAPTCHA,GET_CAPTCHA_SUCCESS} from './constants';

const initialState = {

    data:JSON.parse(localStorage.getItem('token')) || null,
    isLoading:false
}
const login = (state = initialState,action) => {
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {...initialState,isLoading:true}
        case LOGIN_USER_SUCCESS:
            return {data:action.payload,isLoading:false,}
        case GET_CAPTCHA_SUCCESS:
        return state
        case LOGOUT_USER:
            return {
              data: null,
              isLoading: false
            }
        default:
            return state
    }
}


export default login
