import React, { Component } from "react";
import FadeIn from "react-fade-in";
export default class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcards: []
    }
  }
  componentDidMount(){
    fetch("/api/cards/400").then ((res) => {return res.json()}).then((data) => 
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
          <h1>Seasonal Pre-Printed Postcards</h1>
          <h2>Cards for every major holiday! See our gallery below.</h2>
          <p>
            Choose a postcard from our gallery below or create a professional
            custon postcard
          </p>
          <p>Also see our monthly calender postcards</p>
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
        </section>
      </FadeIn>
    );
  }
}
