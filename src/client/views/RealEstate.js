
import React, { Component } from "react";
import FadeIn from "react-fade-in";

export default class RealEstate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcards: []
    }
  }
  componentDidMount(){
    fetch("/api/cards/100").then ((res) => {return res.json()}).then((data) => 
    {this.setState (
      {
        postcards: data
      })
    }
    )    
    .catch((error) => {
      console.log(error);
    });
  }

  
  render() {
    return (
      <FadeIn>
        <div className="pageStyle">
        
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
        <div className="positionImage" >
        {this.state.postcards.map((card) => {
          return <img src={card.image}/>
        })}
        </div>
      </FadeIn>
    );
  }
}
