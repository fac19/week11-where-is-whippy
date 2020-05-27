import styled from "styled-components"

const lightBlue = "#C3DDED"
const navy = "#1f4068"
const lightPink = "#F7DCD5"
const background = "#F7F4F0"

const Button = `
padding: 10% 15% 10% 15%;
margin: 5% auto;
  max-width: 200px;
  border-radius: 5%;
  color: ${navy};
  text-decoration: none;
  font-size: 2rem;
`

const BlueButton = styled.a`
${Button}
background-color: ${lightBlue}
`

const PinkButton = styled.a`
  ${Button}
  background-color: ${lightPink};
`

const PageContainer = styled.section`
  background-color: ${background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 90vh;
`

const Header = styled.h1`
  width: 320px;
  height: 80px;
  font-style: italic;
  color: navy;
}
`

export { BlueButton, PinkButton, PageContainer, Header }
