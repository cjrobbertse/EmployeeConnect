import React, { useState, FormEventHandler } from "react";
import Input from "../../components/Input/Input";
import inputData from "../../components/Input/inputData.json";
import EmployeeFormStyles from "./EmployeeFormStyles";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import WorkingBackground from "../../../public/assets/images/working-background.png";

const EmployeeDetails = () => {
  return (
    <EmployeeFormStyles>
      <HeroBanner heroBannerImage={WorkingBackground} />
      <SkinnyBanner bannerHeading="Employee Details" />
      <h3>Please provide the following details:</h3>
    </EmployeeFormStyles>
  );
};
export default EmployeeDetails;
