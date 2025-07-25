import React from "react";
import ShowPassword from "./ShowPassword";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const toggleShow = (state)=>{
    console.log(state)
  }
  return (
    <form className="login__form p-med h100">
      <h2 className="login__header">Login as User</h2>
      <input className="login__input mt-small t-pad-small"  placeholder="Enter Email" type="email"/>
      <input className="login__input mt-small t-pad-small" placeholder="Password" type="password"/>
      <div className="d-flex j-between align-center mt-small ">
       <ShowPassword onChange={toggleShow}/>
       <Link to="/" className="login__forgot">Forgot Password</Link>
      </div>
      <div className="login__buttonsContainer mt-med">
        <button className="login__button login--register t-pad-mini" type="button">Register</button>
        <button className="login__button login--login t-pad-mini" type="button">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
