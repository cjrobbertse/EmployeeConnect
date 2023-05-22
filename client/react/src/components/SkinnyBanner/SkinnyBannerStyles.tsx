import styled from "styled-components";

const SkinnyBannerStyles = styled.div`
  background-color: #4d5866;
  text-align: center;
  height: 100px;
  color: white;
  transform: translateY(-50px);

  h2 {
    padding-top: 20px;
    font-size: 50px;
  }
  @media (max-width: 767px) {
    height: 60px;
    h2 {
      transform: translateY(-5px);
      font-size: 27px;
    }
  }
`;
export default SkinnyBannerStyles;
