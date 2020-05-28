import styled from "styled-components";

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
`;

const BlueButton = styled.button`
${Button}
background-color: ${lightBlue}
`;

const PinkButton = styled.button`
  ${Button}
  background-color: ${lightPink};
`;

const PinkSmallButton = styled.button`
  ${PinkButton}
  font-size: 1rem;
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

export { BlueButton, PinkButton, PinkSmallButton, PageContainer };
