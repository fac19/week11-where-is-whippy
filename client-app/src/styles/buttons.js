import styled from "styled-components";

const lightBlue = "#C3DDED";
const navy = "#1f4068";
const lightPink = "#F7DCD5";
const background = "#F7F4F0";

const Button = `
  width: 75%;
  max-width: 250px; 
  border-radius: 5px;
  color: ${navy};
  text-decoration: none;
  font-size: 2rem;
  padding: 0.25em 1em;
  margin-top: 2.5%;
  display: block;
`;

const BlueButton = styled.a`
${Button}
background-color: ${lightBlue}
`;

const PinkButton = styled.a`
  ${Button}
  background-color: ${lightPink};
`;

const PageContainer = styled.section`
  background-color: ${background};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`;
/* 
  justify-content: center;
  position: relative;
  min-height: 90vh;*/

//fix width of the buttons

export { BlueButton, PinkButton, PageContainer };
