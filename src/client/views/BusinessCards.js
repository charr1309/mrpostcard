import React, { Component } from "react";
import FadeIn from "react-fade-in";

export default class BusinessCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcards: []
    }
  }
  componentDidMount(){
    fetch("/api/cards/500").then ((res) => {return res.json()}).then((data) => 
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
         <section className="Hol-container">
        <div>
          <h1>Custom BusinessCards</h1>
          <h2>
            Full Color, both sides: Get 2,500 business cards for only $175.
          </h2>
          <p>included in the price</p>
          <ul>
            <li>30 minutes FREE graphic design</li>
            <li>Full color, both sides</li>
            <li>100 lbs. card stock</li>
          </ul>
          <p>Pricing: Click here</p>
          <p>A few samples of our work--Click image to enlarge</p>
        </div>
        <div className="positionImage" >
        {this.state.postcards.map((card) => {
          return <img key={card.id} src={card.image}/>
        })}
        </div>
        </section>
      </FadeIn>
    );
  }
}
