import styled from "@emotion/styled";
import {
  Principal,
  Secundario,
  PrincipalBorder,
  SecundarioInput,
} from "../../colors";

export const Formstyled = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: auto;
  position: absolute;
  bottom: 7.5rem;
  left: 0;
  right: 0;
  margin: 1.5rem;
  padding: 2rem;
  border-radius: 25px;
`;

export const Line = styled.div`
  height: 1px;
  width: auto;
  margin: 0rem 1.2rem;
  background-color: ${({ tipo }) => Principal(tipo)};
  margin-top: 1.5rem;
`;

export const Error = styled.div`
  background-color: #ffd4d4;
  color: #ff0000;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 25px;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  background-color: ${({ tipo }) => Principal(tipo)};
  border: 3px solid ${({ tipo }) => Principal(tipo)};
  color: white;
  font-size: 1.3rem;
  margin-top: 1.5rem;
  cursor: pointer;
  box-shadow: 5px 5px 6px 0px rgba(50, 50, 50, 0.33);
  &:hover {
    background-color: ${({ tipo }) => Secundario(tipo)};
    border-color: ${({ tipo }) => Secundario(tipo)};
  }
`;

export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.3rem;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  background-color: ${({ tipo }) => SecundarioInput(tipo)};
  border: 3px solid ${({ tipo }) => PrincipalBorder(tipo)};
  color: white;
  font-size: 1.3rem;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export const Label = styled.label`
  font-size: 1.3rem;
  line-height: 1.2rem;
  color: ${({ tipo }) => Principal(tipo)};
`;

export const Select = styled.select`
  width: 100%;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  background-color: ${({ tipo }) => SecundarioInput(tipo)};
  border: 3px solid ${({ tipo }) => PrincipalBorder(tipo)};
  color: white;
  font-size: 1.3rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;
