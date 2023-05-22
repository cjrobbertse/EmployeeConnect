import styled from "styled-components";

const HeroBannerStyles = styled.div`
  width: 100%;
  height: 250px;
  box-shadow: 1px 1px 3px #373535;
  & h1 {
    width: 40%;
    color: #4d5866;
    font-size: 70px;
    margin: auto;
    transform: translateY(-2.3em);
    text-align: center;
  }
  & p {
    width: 35%;
    color: #313941;
    font-size: 20px;
    margin-left: 53%;
    text-align: center;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default HeroBannerStyles;
