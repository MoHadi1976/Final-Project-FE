import React from "react";

const Login = ({setPass, setEmail, loginHandler}) => {

    return(
        <form onSubmit={loginHandler}>
               <a href="/">Homepage</a>

        <h1>Login</h1>
        <input classname="input-fields" placeholder='email' type="email" onChange={(e) => setEmail(e.target.value) } />
        <input classname="input-fields" placeholder='password' type="password" onChange={(e) => setPass(e.target.value)}  />
        <button type='submit'>Login</button>
      </form>
    )
}

export default Login; 