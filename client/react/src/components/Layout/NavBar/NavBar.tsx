import React from "react";
import NavBarStyles from "./NavBarStyles";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarStyles>
      <div className="desktop-nav">
        <nav>
          {/*Display site's title*/}
          <h1>Employee Connect</h1>
          <ul>
            <li>
              <NavLink to="/employee-form">Employee Form</NavLink>
            </li>
            <li>
              <NavLink to="/employee-details">Employee Details</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </NavBarStyles>
  );
};
export default NavBar;
