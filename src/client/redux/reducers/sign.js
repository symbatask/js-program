import axios from 'axios'
import Cookies from 'universal-cookie'
import {TRY_SIGN_IN, SIGN_IN, LOG_OUT} from '../actions/actions'

const cookies = new Cookies()

const initialState = {
  token: cookies.get('token'),
  user: '',
  isLoading: true,
  isAuth : false
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, user: action.user, token: action.token, isLoading: action.isLoading, isAuth:action.isAuth}
    case TRY_SIGN_IN:
      return {...state, user: action.user, token: action.token, isLoading: action.isLoading, isAuth: action.isAuth}
    case LOG_OUT:
      return {...state, user: '', token: '', isAuth: false}
    case 'FAILED_LOAD':
      return {...state, isLoading: false}
    default:
      return state
  }
}

export function trySignIn() {
  return (dispatch) => {
    axios.get('/api/v1/signin').then(({data}) => {
      dispatch({
        type: TRY_SIGN_IN,
        user: data.user,
        token: data.token,
        isLoading: false,
        isAuth: true
      })
    })
  }
}

export function signIn(userInformation) {
  return (dispatch) => {
    axios.post('/api/v1/signin', userInformation).then(({data}) => {
      dispatch({
        type: SIGN_IN,
        user: data.user,
        token: data.token,
        isLoading: false,
        isAuth: true
      })
    }).catch((err)=> console.log(err))
  }
}

export function logOut() {
  return (dispatch) => {
    cookies.remove('token')
    dispatch({type: LOG_OUT})
  }
}
