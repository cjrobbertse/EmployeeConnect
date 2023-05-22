import React, { useState, FormEventHandler } from "react";
import Input from "../../components/Input/Input";
import inputData from "../../components/Input/inputData.json";
import EmployeeDetailsStyles from "./EmployeeDetailsStyles";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import LaptopBackground from "../../../public/assets/images/laptop-background.png";
import { SocketContext } from "../../App";

const EmployeeDetails = () => {
  return (
    <EmployeeDetailsStyles>
      {/*Hero banner imported to display the hero image */}
      <HeroBanner heroBannerImage={LaptopBackground} />
      {/*Skinny banner used to display page's title*/}
      <SkinnyBanner bannerHeading="New Employee Details" />
      <SocketContext.Consumer>
        {([socket, messages]) => messages}
      </SocketContext.Consumer>
    </EmployeeDetailsStyles>
  );
};
export default EmployeeDetails;
