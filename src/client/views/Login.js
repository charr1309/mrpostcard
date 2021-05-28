import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../views/Index";

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
        
      }
      
    }
    
render() {
    return (
      <div>
        <form className="Login">
          <label htmlFor="login">Login</label>
          <br />
          <input type="text" id="login" name="login" placeholder="Username" />
          <br />
          {/* <label htmlFor='password'>Password</label><br/> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <br />
          <button type="submit">Submit</button>
          <button type="submit" id="signup" onClick={() => ({
              // <Route exact path={route.path}>
              // {<route.Component />}
          })}>
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
