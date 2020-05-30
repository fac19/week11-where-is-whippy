import styled from "styled-components";
import { Link } from "react-router-dom";

const navy = "#41518D";
// const background = "#f2f3f7";
// const background = "#f5f5f5";
// const background = "#FBE5E0";
const Title = styled.h1`
  font-style: italic;
  font-size: 2.7rem;
  font-family: Changa;
  color: white;
  text-shadow: ${navy} 1px 0px 0px, ${navy} 0.540302px 0.841471px 0px,
    ${navy} -0.416147px 0.909297px 0px, ${navy} -0.989992px 0.14112px 0px,
    ${navy} -0.653644px -0.756802px 0px, ${navy} 0.283662px -0.958924px 0px,
    ${navy} 0.96017px -0.279415px 0px;
`;

const HeaderArea = styled.header`
  display: flex;
  flex-direction: column;
`;

const StyledLogInLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
`;

export { Title, HeaderArea, StyledLogInLink };
