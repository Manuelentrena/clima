import styled from "@emotion/styled";
import { Principal, Secundario } from "../../colors";

export const Botonstyled = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  width: fit-content;
  border-radius: 50%;
  border: none;
  padding: 0.4rem 0.7rem;
  display: grid;
  place-items: center;
  cursor: pointer;

  & path {
    fill: ${({ tipo }) => Principal(tipo)};
  }

  &:hover path {
    fill: ${({ tipo }) => Secundario(tipo)};
  }
`;
