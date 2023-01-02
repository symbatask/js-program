import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {trySignIn} from "./redux/reducers/sign";
import { history } from './redux'
import Login from "./scenes/Login";
import {getUsers} from "./redux/reducers/user";


const StartUp = ({children}) => {
  const dispatch = useDispatch()
  const token = useSelector((s) => s.signIn.token)
  const user = useSelector((s) => s.signIn.user)
  useEffect(() => {
    if (token) {
      dispatch(trySignIn())
    } else {
        history.push('/login')
      dispatch({ type: 'FAILED_LOAD' })
    }
  // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!!token && !!user) {
      dispatch(getUsers())
    }
  }, [dispatch, token, user])


  return (!!token && !!user ) ? children : <Login />
}

export default StartUp