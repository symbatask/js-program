import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import signIn from './sign'
import homeworks from './homeworks'
import weeks from './weeks'
import users from './user'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    signIn,
    homeworks,
    weeks,
    users
  })

export default createRootReducer