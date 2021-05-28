import React, { Component } from "react";
import FadeIn from "react-fade-in";

export default class FullColor extends Component {
  render() {
    return (
      <FadeIn>
         <section className="Cus-container">
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
        <img src="https://th.bing.com/th/id/R4e9919b281e84e3845f8fdf4b63704be?rik=Iy3y6YpVdoDliQ&riu=http%3a%2f%2fwww.impactcolorprint.com%2fproducts%2fimages%2fimpact-pics%2fcustom-postcards_04.jpg&ehk=6Esau%2bG0J3zJt7WHDx3fZ4ZrkhlgaA8JBR4uDrz8PBI%3d&risl=&pid=ImgRaw"/>
        </section>
      </FadeIn>
    );
  }
}
