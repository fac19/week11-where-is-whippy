import styled from "styled-components";

const navy = "#1f4068";

const Label = styled.label`
  color: ${navy};
  font-size: 1.25rem;
  text-align: left;
  margin-bottom: 0.45rem;
`;

const Input = styled.input`
  color: ${navy};
  border-radius: 5px;
  margin-bottom: 1rem;
  width: 75%;
  max-width: 500px;
  height: 1.5rem;
`;

const Legend = styled.legend`
  color: ${navy};
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-family: Karla;
`;

const radioBtnWrapper = styled.input``;

const FieldSet = styled.fieldset`
  font-size: 1.25rem;
  border: none;
  width: 75%;
  max-width: 250px;
  margin-bottom: 1rem;
`;

export { Label, Input, Legend, FormContainer, FieldSet };
