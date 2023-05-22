import React from "react";
import NavBar from "./NavBar/NavBar";
import LayoutStyles from "./LayoutStyles";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyles>
      <NavBar />
      <main>{children}</main>
    </LayoutStyles>
  );
};
export default Layout;
