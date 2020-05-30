import styled from "styled-components";
require("typeface-karla");
require("typeface-changa");
require("typeface-poppins");
require("typeface-ubuntu");

const Title2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: poppins;
  font-weight: 400;
`;

const Img = `
max-width: 20vw;
`;

const LandingImg = styled.img`
  ${Img}
  max-width: 20rem;
  margin: 2.5rem;
`;

export { LandingImg, Title2 };
