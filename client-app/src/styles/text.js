import styled from "styled-components";

const background = "#F7F4F0";
const navy = "#1f4068";

const Label = styled.label`
  color: ${navy};
  font-size: 1.25rem;
  text-align: left;
  margin-bottom: 0.45rem;
`;

const Title = styled.h2`
  color: ${navy};
  font-size: 1rem;
  text-align: center;
`;

const Input = styled.input`
  background-color: ${background};
  color: ${navy};
  border-radius: 5px;
  margin-bottom: 0.2rem;
  width: 240px;
  height: 31px;
  justify-c: center;
`;

const Legend = styled.legend`
  color: ${navy};
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${background};
`;

export { Label, Input, Legend, FormContainer, Title };
