import styled from "styled-components";
import { Link } from "react-router-dom";

const lightBlue = "#C3DDED";
const lightPink = "#F7DCD5";
const navy = "#012c61";
const buttonBackground = "#41518D";
// const background = "#f2f3f7";
// const background = "#f5f5f5";
const background = "#FBE5E0";
const red = "#ff6160";
const pink = "#ffb39f";
const green = "#32b39f";

const Button = `
display: block;
margin-top: 4%;
text-decoration: none;
width: 75vw;
height: 8vh;
max-width: 400px;
border: none;
font-size: 2rem;
font-family: poppins;
border-radius: 50px;
color: white;
text-align: center;
&:hover {
  cursor: pointer;
}
background-color: ${buttonBackground};
`;

const VendorButton = styled.button`
  ${Button};
  text-decoration: none;
  &:hover {
    background-image: linear-gradient(to right, #f2d2c9, ${pink});
  }
`;

const CustomerButton = styled.button`
  ${Button};
  text-decoration: none;
  &:hover {
    background-image: linear-gradient(to right, #adccc7, ${green});
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
