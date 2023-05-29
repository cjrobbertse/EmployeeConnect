import React from "react";
import NavBar from "./NavBar/NavBar";

//Typed properties of component
interface LayoutProps {
  children: React.ReactNode;
}
//Layout creates a template to be implemented within each page
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/*Displays navigation bar at top of page */}
      <NavBar />
      {/*Main tag accepts the children property */}
      <main>{children}</main>
    </>
  );
};
export default Layout;
