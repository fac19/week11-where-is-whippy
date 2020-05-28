import styled from "styled-components";

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
  width: 320px;
  height: 80px;
  font-style: italic;
  color: ${navy};
`;

const HeaderArea = styled.header`
  background-color: ${background};
`;

export { Title, HeaderArea };
