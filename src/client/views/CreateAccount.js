import React, { Component } from "react";

class CreateAccount extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        email: "",
        signup: "",
        
      }
      const addRecord = () => {axios.post("http://localhost:3000/api/insert", {
      username: username,
      password: password,
      email: email,
      sigup: signup,
    }).then(() => {
      console.log("Added one record to customers table");
    })
  }
    }
    
  
  render() {
    return (
      <form method="POST">
        <label htmlFor="username">Enter Your User Name</label>
        <br></br>
        <input type="text" id="username" name="username" onChange={(e) => {
          {this.setState (
            {
              username: username 
            }
          )}
        }}></input>
        <br></br>
        <label htmlFor="password">Enter Your Password</label>
        <input type="password" id="password" name="password" onChange={(e) => {
          {this.setState (
            {
              password: password 
            }
          )}
        }}></input>
        <br></br>
        <label htmlFor="email">Enter your email</label>
        <br></br>
        <input type="email" id="email" name="email" onChange={(e) => {
          {this.setState (
            {
              email: email 
            }
          )}
        }}></input>
        <br></br>
        <label htmlFor="signup">
          Would you like to receive our Newsletter?
        </label>
        <select name="signup" id="signup" onChange={(e) => {
          {this.setState (
            {
              signup: signup 
            }
          )}
        }}>
          <option value="Yes">Yes</option>
          <option value="No"> </option>
        </select>
        <button type="submit" onClick={addRecord}>Submit</button>
      </form>
    );
  }
}

export default CreateAccount;
