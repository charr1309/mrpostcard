import React, { Component } from "react";
import axios from 'axios';
import FadeIn from "react-fade-in";

class CreateAccount extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        email: "",
        signup: "YES",
        
      }
      this.addRecord = this.addRecord.bind(this);
    }
    addRecord (e) {
      e.preventDefault();
      axios.post("/api/insert", {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      signup: this.state.signup,
    }).then(() => {
      console.log("Added one record to customers table");
    }).catch ((error) => {
      console.log(error)
    })
  }
    
  
  render() {
    return (
      <FadeIn>
        <div className="border-line">
        <div className="form-container">
          
          <div>
          <h1>Complete the form below to create your free account.</h1>
        <form>
        <label htmlFor="username">Enter Your User Name</label>
        <br></br>
        <input type="text" id="username" name="username" onChange={(e) => {
          {this.setState (
            {
              username: e.target.value 
            }
          )}
        }}></input>
        <br></br>
        <label htmlFor="password">Enter Your Password</label><br></br>
        <input type="password" id="password" name="password" onChange={(e) => {
          {this.setState (
            {
              password: e.target.value 
            }
          )}
        }}></input>
        <br></br>
        <label htmlFor="email">Enter your email</label>
        <br></br>
        <input type="email" id="email" name="email" onChange={(e) => {
          {this.setState (
            {
              email: e.target.value 
            }
          )}
        }}></input>
        <br></br>
        <label htmlFor="signup">
          Would you like to receive our Newsletter?
        </label>
        <select name="signup" id="signup" onChange={(e) => {
          console.log(e.target.value)
          this.setState (
            {
              signup: e.target.value 
              
            }
          )
        }}>
          <option value="Yes">Yes</option>
          <option value="No">NO</option>
        </select>
        <button type="submit" onClick={this.addRecord}>Submit</button>
      </form>
      </div>
      </div>
      </div>
      </FadeIn>
      
          
        
      
      
      
    );
  }
}

export default CreateAccount;
