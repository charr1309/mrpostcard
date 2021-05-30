import React, { Component } from "react";
import FadeIn from "react-fade-in";
class Contact extends Component {
  render() {
    return (
      <div>
        <FadeIn>
        <section className="Cal-container">
          <div>
            <h1>Contact Mr. PostCard</h1>
            <p>Phone: 404.849.6139</p>
            <p>Fax: 404.921.1023</p>
            <p>Email: info@mrpostcard.com</p>
            <form>
              <label htmlFor="Name">Name</label>
              <br></br>
              <input type="text" id="Name" name="Name"></input>
              <br></br>
              <label htmlFor="Phone">Phone</label>
              <br></br>
              <input type="text" id="Phone" name="Phone"></input>
              <br></br>
              <label htmlFor="Company">Company/Organization</label>
              <br></br>
              <input type="text" id="CompanyEmail" name="CompanyEmail"></input>
              <br></br>
              <label htmlFor="Email">Email</label>
              <br></br>
              <input type="text" id="Email" name="Email"></input>
              <br></br>
              <label htmlFor="Address1">Address1</label>
              <br></br>
              <input type="text" id="Address1" name="Address1"></input>
              <br></br>
              <label htmlFor="Address2">Address2</label>
              <br></br>
              <input type="text" id="Address2" name="Address2"></input>
              <br></br>
              <label htmlFor="City">City</label>
              <br></br>
              <input type="text" id="City" name="City"></input>
              <br></br>
              <label htmlFor="State">State</label>
              <br></br>
              <input type="text" id="State" name="State"></input>
              <br></br>
              <label htmlFor="Zip">Zip</label>
              <br></br>
              <input type="text" id="Zip" name="Zip"></input>
              <br></br>
              <label htmlFor="referral">
                How did you hear about Mr. Postcard
              </label>
              <br></br>
              <select id="referral" name="referral">
                
                <option value="referral">Referral</option>
                <option value="postcard">Received someones postcard</option>
                <option value="Received mailer from us">
                  Received mailer from us
                </option>
                <option value="Search Engine">Search Engine</option>
                <option value="Other WebsiteOther">Other WebsiteOther</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="Comments">Comments</label>
              <br></br>
              <input type="textarea" id="Comments" name="Comments"></input>
              <br></br>
              <button type="Submit">Submit</button>
            </form>
          </div>
          <img src="https://www.multimediagraphics.net/wp-content/uploads/2015/10/Contact-us.jpg"/>
          </section>
        </FadeIn>
      </div>
    );
  }
}
export default Contact;
