import styled from "styled-components";
import { Link } from "react-router-dom";

const navy = "#41518D";
const background = "#f2f3f7";
const Title = styled.h1`
  font-style: italic;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-family: Changa;
  color: ${navy};
`;

const okay = styled.span`
  display: inline;
`;
const HeaderArea = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
  background-color: ${background};
`;

const StyledLogInLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
`;

export { Title, HeaderArea, StyledLogInLink, okay };
