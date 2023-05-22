import React from "react";
import NavBar from "./NavBar/NavBar";
import LayoutStyles from "./LayoutStyles";

//Typed properties of component
interface LayoutProps {
  children: React.ReactNode;
}
//Layout creates a template to be implemented within each page
const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyles>
      {/*Displays navigation bar at top of page */}
      <NavBar />
      {/*Main tag accepts the children property */}
      <main>{children}</main>
    </LayoutStyles>
  );
};
export default Layout;
