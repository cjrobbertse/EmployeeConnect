import React, { useState, FormEventHandler } from "react";
import Input from "../../components/Input/Input";
import inputData from "../../components/Input/inputData.json";
import EmployeeFormStyles from "./EmployeeFormStyles";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import LaptopBackground from "../../../public/assets/images/laptop-background.png";

const EmployeeDetails = () => {
  return (
    <EmployeeFormStyles>
      {/*Hero banner imported to display the hero image */}
      <HeroBanner heroBannerImage={LaptopBackground} />
      {/*Skinny banner used to display page's title*/}
      <SkinnyBanner bannerHeading="Employee Details" />
      <h3>Please provide the following details:</h3>
    </EmployeeFormStyles>
  );
};
export default EmployeeDetails;
