import styled from "styled-components";

const lightBlue = "#C3DDED";
const navy = "#1f4068";

const Title2 = styled.h2`
  color: ${navy};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
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
