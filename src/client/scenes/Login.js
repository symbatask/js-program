import React from "react";
import Head from "../components/Head";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../redux/reducers/sign";

const Login = () => {
  const [userInformation, setUserInformation] = React.useState({})
  const dispatch = useDispatch()
  const isLoading = useSelector((s) => s.signIn.isLoading)

  if(isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className="login-wrapper">
      <Head title="Login"/>
      <form className="login-form">
        <label htmlFor="login-first-name">
          first name
        </label>
        <input id="login-first-name"
               type="text"
               placeholder="Jane"
               onChange={(e) =>
                 setUserInformation({...userInformation, first_name: e.target.value})}/>
        <label htmlFor="login-password">
          password
        </label>
        <input id="login-password"
               type="password"
               placeholder="*******"
               onChange={(e) => setUserInformation({...userInformation, password: e.target.value})}
               onKeyDown={(e) => {
                 if (e.key === 'Enter') {
                   dispatch(signIn(userInformation))
                 }
               }}
        />
        <button
          type="button"
          className="login-btn"
          onClick={() => dispatch(signIn(userInformation))}
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Login