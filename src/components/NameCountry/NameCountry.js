import styled from "@emotion/styled";
import { PrincipalOscuro75 } from "../../colors";

const NameCountry = styled.p`
  font-family: "Myanmar Text Regular";
  font-weight: 100;
  position: absolute;
  top: 16vw;
  left: 1.5rem;
  color: ${({ tipo }) => PrincipalOscuro75(tipo)};
  font-size: 7vw;
  margin: 0;
  @media (min-width: 500px) {
    font-size: 2rem;
    top: 4.5rem;
  }
`;

export default NameCountry;
