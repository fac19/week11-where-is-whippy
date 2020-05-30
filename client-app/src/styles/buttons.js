import styled from "styled-components";
import { Link } from "react-router-dom";

const lightBlue = "#C3DDED";
const lightPink = "#F7DCD5";
const navy = "#012c61";
const buttonBackground = "#41518D";
const background = "#f2f3f7";
const red = "#ff6160";

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
background-color: ${buttonBackground};
color: white;
text-align: center;
&:hover {
  cursor: pointer;
}
`;

const PinkButton = styled.button`
  ${Button};
  text-decoration: none;
  &:hover {
    background-color: ${red};
  }
`;

const BlueButton = styled.button`
  ${Button};
  text-decoration: none;
  &:hover {
    background-color: ${red};
  }
`;

const SignUpButton = styled.button`
  ${Button};
  color: ${buttonBackground};
  background-color: ${background};
  border: 2px solid ${buttonBackground};
  &:hover {
    color: ${red};
    border: 2px solid ${red};
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
  BlueButton,
  BlueSmallButton,
  PinkButton,
  PinkSmallButton,
  SignUpButton,
  PageContainer,
  StyledLink,
};
