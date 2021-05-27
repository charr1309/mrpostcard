import React, { Component } from "react";

class Login extends Component {
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
          <button type="submit" id="signup">
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
