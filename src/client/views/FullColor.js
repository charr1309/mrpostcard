import React, { Component } from "react";
import FadeIn from "react-fade-in";

export default class FullColor extends Component {
  render() {
    return (
      <FadeIn>
        <div>
          <h1>Professional Custom Postcards for your Business</h1>
          <h3>
            Create the right image for your business with our customized
            postcards
          </h3>
          <p>
            Order Now - By phone - 404.849.6139 By email - info@mrpostcard.com
          </p>
          <p>Included in the price:</p>
          <ul>
            <li>90 minutes FREE graphic design</li>
            <li>Full color, both sides</li>
            <li>100 lbs. postcard stock</li>
          </ul>
          <p>Pricing: Click here.</p>
          <h3>A few samples of our work. Click image to enlarge</h3>
        </div>
      </FadeIn>
    );
  }
}
