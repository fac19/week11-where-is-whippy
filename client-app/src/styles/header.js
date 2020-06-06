import styled from "styled-components";
import { Link } from "react-router-dom";

// const navy = "#192b85";
const navy = "#112278";
const background = "#edf1fa";

const Title = styled.h1`
  font-style: italic;
  margin-top: 3rem;
  font-size: 3rem;
  font-family: bowlby one sc;
  letter-spacing: 0.2rem;
  color: ${background};
  text-shadow: ${navy} 2px 0px 0px, ${navy} 1.75517px 0.958851px 0px,
    ${navy} 1.0806px 1.68294px 0px, ${navy} 0.141474px 1.99499px 0px,
    ${navy} -0.832294px 1.81859px 0px, ${navy} -1.60229px 1.19694px 0px,
    ${navy} -1.97998px 0.28224px 0px, ${navy} -1.87291px -0.701566px 0px,
    ${navy} -1.30729px -1.5136px 0px, ${navy} -0.421592px -1.95506px 0px,
    ${navy} 0.567324px -1.91785px 0px, ${navy} 1.41734px -1.41108px 0px,
    ${navy} 1.92034px -0.558831px 0px;
`;

const HeaderArea = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${background};
`;

const StyledLogInLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
`;

export { Title, HeaderArea, StyledLogInLink };
