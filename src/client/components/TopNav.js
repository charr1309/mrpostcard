import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/TopNav.scss";

class TopNav extends Component {
  render() {
    return (
      <div>
        <div className="Navbar-top">
          <div className="Top-menu">
            <NavLink className="items" to="/">
              Home
            </NavLink>
            <NavLink className="items" to="/Contact">
              Contact Mr. Postcard
            </NavLink>
            <NavLink className="items" to="/About">
              About Mr. Postcard
            </NavLink>
            <NavLink className="items" to="/SiteNewsletter">
              Newsletter
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default TopNav;
