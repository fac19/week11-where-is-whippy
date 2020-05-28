import styled from "styled-components";
import { Link } from "react-router-dom";

const lightBlue = "#C3DDED";
const navy = "#1f4068";
const lightPink = "#F7DCD5";
const background = "#F7F4F0";

const Button = `
  border-radius: 5px;
  color: ${navy};
  font-size: 2rem;
  padding: 0.25em 1em;
  margin-top: 2.5%;
  display: block;
  width: 75vw;
  max-width: 400px;

  &:hover {
    cursor: pointer;
  }
`;

const BlueButton = styled.button`
  ${Button}
  background-color: ${lightBlue}
`;

const PinkButton = styled.button`
  ${Button};
  background-color: ${lightPink};
`;

const PinkSmallButton = styled.button`
  ${Button};
  background-color: ${lightPink};
  font-size: 1rem;
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

export { BlueButton, PinkButton, PinkSmallButton, PageContainer, StyledLink };
