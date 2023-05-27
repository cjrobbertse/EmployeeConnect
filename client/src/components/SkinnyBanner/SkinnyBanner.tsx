import React from "react";
import SkinnyBannerStyles from "./SkinnyBannerStyles";

//Typed properties of the component
interface SkinnyBannerProps {
  bannerHeading: string;
}
//SkinnyBanner is used to display a page's heading
const SkinnyBanner = ({ bannerHeading }: SkinnyBannerProps) => {
  return (
    <SkinnyBannerStyles>
      <h2>{bannerHeading}</h2>
    </SkinnyBannerStyles>
  );
};
export default SkinnyBanner;
