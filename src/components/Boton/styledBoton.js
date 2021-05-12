import styled from "@emotion/styled";
import { Principal, Secundario } from "../../colors";

export const Botonstyled = styled.button`
  position: absolute;
  bottom: 5rem;
  left: 1.5rem;
  width: fit-content;
  border-radius: 50%;
  border: none;
  padding: 0.4rem 0.7rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  /* box-shadow: 6px 6px 10px -3px rgba(0, 0, 0, 0.4); */
  box-shadow: 5px 5px 6px 0px rgba(50, 50, 50, 0.33);
  & path {
    fill: ${({ tipo }) => Principal(tipo)};
  }

  &:hover path {
    fill: ${({ tipo }) => Secundario(tipo)};
  }
`;
