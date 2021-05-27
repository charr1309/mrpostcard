import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/MainNav.scss";

class MainNav extends Component {
  render() {
    return (
      <div>
        <div className="Navbar-main">
          <div className="menu">
            <NavLink className="Main-item" to="/RealEstate">
              Real Estate Postcards
            </NavLink>
            <NavLink className="Main-item" to="/Calendar">
              Monthly Calendar Postcards
            </NavLink>
            <NavLink className="Main-item" to="/Sports">
              Sports Schedule Postcards
            </NavLink>
            <NavLink className="Main-item" to="/Holiday">
              Holiday and Seasonal Postcards
            </NavLink>
            <NavLink className="Main-item" to="/FullColor">
              Full Color Custom PostCards
            </NavLink>
            <NavLink className="Main-item" to="/Mailing">
              Mailing Services
            </NavLink>
            <NavLink className="Main-item" to="/BusinessCards">
              Business Cards
            </NavLink>
            <NavLink className="Main-item" to="/Websites">
              Websites and Hosting
            </NavLink>
            <NavLink className="Main-item" to="/Newsletter">
              Newsletters, Flyers, Folders etc.
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default MainNav;
