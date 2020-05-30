import styled from "styled-components";
import { Link } from "react-router-dom";

const lightBlue = "#C3DDED";
const lightPink = "#F7DCD5";
const navy = "#112278";
const buttonBackground = "#41518D";
const background = "#edf1fa";

const red = "#ff6160";
const pink = "#ffb39f";
const green = "#32b39f";

const Button = `
display: block;
margin-top: 5%;
text-decoration: none;
width: 75vw;
height: 8vh;
max-width: 400px;
border: none;
font-size: 2rem;
font-family: karla;
border-radius: 50px;
color: ${navy};
text-align: center;
letter-spacing: 0.08rem;
&:hover {
  cursor: pointer;
}
border-radius: 31px;
background-color: ${background};
// box-shadow:  13px 13px 20px #cccccc, 
//              -13px -13px 20px #fcfcfc;
// box-shadow:  6px 6px 12px #cccccc, 
//              -6px -6px 12px #ffffff;

box-shadow:  12px 12px 24px #cccfd7, 
             -12px -12px 24px #ffffff;
outline: none;
`;

// #d3d6df

const VendorButton = styled.button`
  ${Button};
  text-decoration: none;
  &:hover {
    background: #edf1fa;
    box-shadow: inset 13px 13px 14px #d8dbe4, inset -13px -13px 14px #ffffff;
  }
`;

const CustomerButton = styled.button`
  ${Button};
  text-decoration: none;
  &:hover {
    background: #edf1fa;
    box-shadow: inset 13px 13px 14px #d8dbe4, inset -13px -13px 14px #ffffff;
  }
`;

const SignUpButtonVendor = styled.button`
  ${Button};
  color: ${buttonBackground};
  &:hover {
    color: #ffb39f;
  }
  background-color: none;
`;

const SignUpButtonCustomer = styled.button`
  ${Button};
  color: ${buttonBackground};
  background-color: none;
  &:hover {
    color: #32b39f;
  }
`;

const PinkSmallButton = styled.button`
  ${Button};
  background-color: ${lightPink};
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 0;
`;

const BlueSmallButton = styled.button`
  ${Button};
  background-color: ${lightBlue};
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 0;
  margin: 1rem auto;
`;

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  background-color: ${background};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export {
  CustomerButton,
  BlueSmallButton,
  VendorButton,
  PinkSmallButton,
  SignUpButtonVendor,
  SignUpButtonCustomer,
  PageContainer,
  StyledLink,
};
