import React from "react";
import HeroBannerStyles from "./HeroBannerStyles";

//Typed properties of the component
interface HeroBannerProps {
  heroBannerImage?: string;
}

/* Hero Banner displays an image at the top of a page*/
const HeroBanner = ({ heroBannerImage }: HeroBannerProps) => {
  return (
    <HeroBannerStyles>
      {/*Hero banner accepts an image */}
      <img src={heroBannerImage} alt="Hero" />
    </HeroBannerStyles>
  );
};
export default HeroBanner;
