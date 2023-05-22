import React from "react";
import SkinnyBannerStyles from "./SkinnyBannerStyles";

interface SkinnyBannerProps {
  bannerHeading: string;
}
const SkinnyBanner = ({ bannerHeading }: SkinnyBannerProps) => {
  return (
    <SkinnyBannerStyles>
      <h2>{bannerHeading}</h2>
    </SkinnyBannerStyles>
  );
};
export default SkinnyBanner;
