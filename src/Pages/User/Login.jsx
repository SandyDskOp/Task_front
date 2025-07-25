import React from 'react'
import LoginForm from '../../Components/LoginForm'

const Login = () => {
  return (
    <div
    className='h100 w100 d-flex flex-column j-center align-center'>
        <div className='login'>
            <LoginForm/>
        </div>
    </div>
  )
}

export default Login