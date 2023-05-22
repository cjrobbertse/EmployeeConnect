import React from "react";
import NavBarStyles from "./NavBarStyles";
import { NavLink } from "react-router-dom";
import Logo from "../../../../../../../../../../../CV/Portfolio/src/components/Logo/Logo";

const NavBar = () => {
  return (
    <NavBarStyles>
      {/*Display Logo top right */}
      <Logo className="nav-logo" />

      <div className="desktop-nav">
        <nav>
          {/*Display site's title*/}
          <h1>A.O&apos;Toole</h1>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/routes">Routes</NavLink>
            </li>
            <li>
              <NavLink to="/cv">CV</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </NavBarStyles>
  );
};
export default NavBar;
