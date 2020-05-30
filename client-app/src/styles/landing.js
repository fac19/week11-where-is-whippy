import styled from "styled-components";
require("typeface-karla");
require("typeface-bowlby-one-sc");

const navy = "#112278";

const Title2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: karla;
  color: ${navy};
`;

const Img = `
max-width: 50vw;
`;

const LandingImg = styled.img`
  ${Img}
  max-width: 50rem;
  @media (max-width: 414px) {
    max-width: 20rem;
  }
`;

export { LandingImg, Title2 };
