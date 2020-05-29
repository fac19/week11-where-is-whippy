import styled from "styled-components";
import { Link } from "react-router-dom";

const lightBlue = "#C3DDED";
const navy = "#1f4068";
const lightPink = "#F7DCD5";
const background = "#F7F4F0";

const Button = `
  border-radius: 5px;
  text-align: center;
  color: ${navy};
  font-size: 2rem;
  padding: 0.25em 1em;
  margin-top: 2.5%;
  display: block;
  width: 75vw;
  max-width: 400px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const BlueButton = styled.button`
  ${Button}
  background-color: ${lightBlue}
  text-decoration: none
`;

const PinkButton = styled.button`
  ${Button};
  background-color: ${lightPink};
  text-decoration: none;
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
  background-color: ${background};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export {
  BlueButton,
  BlueSmallButton,
  PinkButton,
  PinkSmallButton,
  PageContainer,
  StyledLink,
};
