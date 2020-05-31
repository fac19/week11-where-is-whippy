import styled from "styled-components";

const navy = "#112278";
const background = "#edf1fa";

const Label = styled.label`
  color: ${navy};
  font-size: 1.15rem;
  text-align: left;
  display: inline-block;
  width: 75%;
  max-width: 480px;
  margin-bottom: 0.45rem;
  font-weight: 700;
`;

const Input = styled.input`
  font-family: Karla;
  color: ${navy};
  border-radius: 31px;
  border: none;
  margin-bottom: 1.3rem;
  width: 75%;
  max-width: 500px;
  min-height: 3rem;
  background-color: ${background};
  box-shadow: inset 5px 5px 5px #cccccc, inset -5px -5px 10px #ffffff;
  &:focus {
    box-shadow: inset 2px 2px 2px #cccccc, inset -2px -2px 2px #ffffff;
  }
  ::placeholder {
    font-family: karla;
    font-size: 1rem;
    color: #858cab;
  }
  transition: all 0.2s ease-in-out;
  outline: none;
  font-size: 1.5rem;
  box-sizing: border-box;
  padding-left: 1.5rem;
`;

const InputRadio = styled.input`
  box-shadow: none;
  color: red;
  font-size: 0.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Legend = styled.legend`
  color: ${navy};
  font-weight: 700;
  font-size: 1.15rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-family: Karla;
  background-color: ${background};
  min-height: 80vh;
`;

const radioBtnWrapper = styled.input``;

const FieldSet = styled.fieldset`
  font-size: 1.25rem;
  border: none;
  width: 75%;
  max-width: 250px;
  margin-bottom: 1rem;
`;

export { Label, Input, InputRadio, Legend, FormContainer, FieldSet };
