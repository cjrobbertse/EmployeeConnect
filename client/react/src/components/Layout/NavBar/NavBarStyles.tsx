import styled from "styled-components";

const NavBarStyles = styled.div`
  background-color: #4d5866;
  height: 70px;
  width: 100%;
  box-shadow: 1px 1px 3px #373535;
  & h1 {
    font-size: 30px;
    color: white;
    margin-left: 14%;
    margin-top: -35px;
    text-shadow: 2px 2px 3px #000;
    cursor: default;
  }

  & ul {
    list-style: none;
    display: flex;
    margin-left: 60%;
    margin-top: -55px;
  }
  & a {
    font-size: 24px;
    color: white;
    text-decoration: none;
    padding: 15px;
    text-align: right;
  }
  img {
    height: 50px;
    width: 62px;
    margin-top: 7px;
    margin-left: 9%;
    cursor: pointer;
  }
  @media (max-width: 1025px) {
    img {
      height: 50px;
      width: 50px;
      margin-top: 15px;
      margin-left: 4%;
    }
    & h1 {
      margin-top: -45px;
    }
    & ul {
      margin-left: 48%;

      margin-top: -7%;
    }
    & a {
      font-size: 22px;

      padding: 10px;
    }
  }
  @media (max-width: 767px) {
    height: 60px;
    .desktop-nav {
      display: none;
    }
    & .nav-logo {
      display: none;
    }
  }
`;
export default NavBarStyles;
