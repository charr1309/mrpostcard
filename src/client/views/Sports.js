import React, { Component } from "react";
import FadeIn from "react-fade-in";

export default class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcards: []
    }
  }
  componentDidMount(){
    fetch("/api/cards/300").then ((res) => {return res.json()}).then((data) => 
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
          <h1>Sports Schedules Pre-Printed Postcards</h1>
          <p>
            They'll keep it on the fridge, which means they'll keep your
            information. We annually print schedules for Atlanta and Georgia's
            favorite sports teams. Customize with your information on the front
            and back.
          </p>
          <ul>
            <li>Atlanta braves</li>
            <li>Atlanta Hawks</li>
            <li>Falcons, Bulldogs, and Yellow Jackets</li>
          </ul>
          <p>Pricing: Click here.</p>
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
