import React, { Component } from "react";
import FadeIn from "react-fade-in";

export default class RealEstate extends Component {
  render() {
    return (
      <FadeIn>
        <div>
          <h1>Real Estate Pre-Printed Postcards</h1>
          <h2>
            Mail 100 pre-printed postcards for just $75, all costs included.
          </h2>
          <p>
            Choose a postcard from our gallery below or create a professional
            custom postcard.
          </p>
          <p>
            Are you a broker? Ask about how we can help your whole office to
            mail pre-printed postcards at a discounted rate.
          </p>
          <p>Pricing: Click here.</p>
          <p>
            Order now:<br></br>
            By phone - 404.849.6139 · By email - info@mrpostcard.com
          </p>
        </div>
      </FadeIn>
    );
  }
}
