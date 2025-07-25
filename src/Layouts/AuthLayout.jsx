import React from 'react'
import AuthRoutes from '../Routes/RouteComponents/AuthRoutes'

const AuthLayout = () => {
  return (
    <div className='h100 w100' style={{backgroundColor:"aliceblue"}}>
        <section className='auth h100'>
            <section className='auth__imageContainer h100'>
                
            </section>
            <section className='auth__formContainer h100'>
                <AuthRoutes/>
            </section>
        </section>
    </div>
  )
}

export default AuthLayout