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
          <NavLink  className="button" id="signup" to= "/CreateAccount">Create Account</NavLink>
        </form>
      </div>
    );
  }
}

export default Login;
