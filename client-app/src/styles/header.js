import styled from "styled-components";
import { Link } from "react-router-dom";

// import Montserrat from ‘./fonts/Montserrat-Regular.ttf’
// injectGlobal`
//   @font-face {
//     font-family: Montserrat;
//     src: url(${Montserrat});
//   }
// `

// @font-face {
//   font-family: 'Changa', sans-serif;
//   src: url('webfont.eot'); /* IE9 Compat Modes */
//   src: url('webfont.eot?#iefix')
//   format('embedded-opentype')
// }

const navy = "#1f4068";
const background = "#F7F4F0";

const Title = styled.h1`
  font-style: italic;
  color: ${navy};
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const HeaderArea = styled.header`
  background-color: ${background};
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
`;

const StyledLogInLink = styled(Link)`
  font-size: 1rem;
  color: ${navy};
  text-decoration: none;
`;

export { Title, HeaderArea, StyledLogInLink };
