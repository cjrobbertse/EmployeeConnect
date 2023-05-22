import React from "react";
import HeroBannerStyles from "./HeroBannerStyles";
interface HeroBannerProps {
  heroBannerHeading?: string;
  heroBannerText?: string;
  heroBannerImage?: string;
  heroBannerClass?: string;
}

const HeroBanner = ({
  heroBannerHeading,
  heroBannerText,
  heroBannerImage,
  heroBannerClass
}: HeroBannerProps) => {
  return (
    <HeroBannerStyles className={heroBannerClass}>
      <img src={heroBannerImage} alt="Hero" />
      <h1>{heroBannerHeading}</h1>
      <p>{heroBannerText}</p>
    </HeroBannerStyles>
  );
};
export default HeroBanner;
