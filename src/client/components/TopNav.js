import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.css";

class TopNav extends Component {
  render() {
    return (
      <div>
        <div classname="Navbar-top">
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
