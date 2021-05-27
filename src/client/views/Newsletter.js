import React, { Component } from "react";
import FadeIn from "react-fade-in";

export default class Newsletter extends Component {
  render() {
    return (
      <FadeIn>
        <div>
          <h1>Custom Flyers, Newsletters, Folders, Etc.</h1>
          <h2>
            We're more than just postcards. We can help you create a custom
            flyer, newsletter, folder, etc. To the right is one of the
            customized pocket folders we've done - stay tuned for more samples.
          </h2>
          <p>
            Order Now - By phone - 404.849.6139 By email - info@mrpostcard.com
          </p>
          <p>Pricing: Click here.</p>
        </div>
      </FadeIn>
    );
  }
}
