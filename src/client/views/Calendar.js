import React, { Component } from "react";
import FadeIn from "react-fade-in";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcards: []
    }
  }
  componentDidMount(){
    fetch("/api/cards/200").then ((res) => {return res.json()}).then((data) => 
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
        <section className="Cal-container">
          <div className="">
            <h1>Atlanta Events - Monthly Calendar Postcards</h1>
            <h3>Some of the venues our cards include:</h3>
            <ul className="">
              <li>Fox Theater</li>
              <li>High Museum of Art</li>
              <li>Atlanta Symphony Orchestra</li>
              <li>14th Street Playhouse</li>
              <li>Kudzu Playhouse</li>
              <li>Fernbank</li>
              <li>Stone Mountain Park</li>
              <li>Philips Arena</li>
              <li>Gwinnett Arena and PAC</li>
              <li>Sporting Events</li>
            </ul>
            <p>
              Base price: 25¢ for 9" x 6"<br></br>
              Pricing: Click here.
            </p>            
          </div>
          <div className="" >
              {this.state.postcards.map((card) => {
              return <img src={card.image}/>})}
          </div>
        </section>        
      </FadeIn>
    );
  }
}
