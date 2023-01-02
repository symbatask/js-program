import React, {useEffect, useState} from 'react'
import notFoundPage from '../../assets/images/notFoundPage.jpg'
import {history} from "../redux";

const Error = () => {
  const [timer, setTimer] = useState(3)

  useEffect(() => {
    setTimeout(() => {
      setTimer((prev) => prev - 1)
      if(timer === 0) {
        history.push('/')
      }
    }, 1000)
  },[timer])
  return (
    <div className="not-found">
      <h2 className="not-found-text">You will be redirected to the main page in {timer}</h2>
      <img src={notFoundPage} alt="page not found" className="not-found-img"/>
      </div>
  )

}

export default Error