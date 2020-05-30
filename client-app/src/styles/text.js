import styled from "styled-components";

const navy = "#1f4068";

const Label = styled.label`
  color: ${navy};
  font-size: 1.25rem;
  text-align: left;
  margin-bottom: 0.45rem;
  font-family: Karla;
`;

const Title = styled.h2`
  font-size: 1rem;
  text-align: center;
  font-family: Karla;
`;

const Input = styled.input`
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
  font-family: Karla;
  background-color: #f2f3f7;
`;

export { Label, Input, Legend, FormContainer, Title };
