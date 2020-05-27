import styled from "styled-components"

const lightBlue = "#C3DDED"
const navy = "#1f4068"
const lightPink = "#F7DCD5"
const background = "#F7F4F0"

const Button = `
  width: 75%;
  max-width: 250px;
  border-radius: 5%;
  color: ${navy};
  text-decoration: none;
  font-size: 2rem;
`

const BlueButton = styled.button`
${Button}
background-color: ${lightBlue}
`

const PinkButton = styled.button`
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

export { BlueButton, PinkButton, PageContainer }
