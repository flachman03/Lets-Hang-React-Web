import React from "react";
import "./NavBar.scss";

export class NavBar extends React.PureComponent {
  state = {};

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-logo">Let's Hang</h1>
        <div className="navbar-icons">
          <img className="navbar-icon" src="./greenUser.png" />
          <img className="navbar-icon" src="./greenGear.png" />
        </div>
      </nav>
    );
  }
}

export default NavBar;