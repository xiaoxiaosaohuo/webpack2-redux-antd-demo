import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER,GETTING_CAPTCHA,GET_CAPTCHA_SUCCESS} from './constants';

console.log(LOGOUT_USER)
export const login = data => dispatch =>{
    dispatch({
        type:LOGIN_USER_REQUEST
    })
    setTimeout(() =>{
        localStorage.setItem('token', JSON.stringify(data))
        dispatch({
            type:LOGIN_USER_SUCCESS,
            payload:data
        })
    },2000)
}

export const logout =() => {
  localStorage.removeItem('token')
  return {
    type: LOGOUT_USER
  }
}
export const getCaptcha = mobile => dispatch =>{
    dispatch({
        type:GETTING_CAPTCHA

    })

        dispatch({
            type:GET_CAPTCHA_SUCCESS,
            payload:mobile
        })
    
}
